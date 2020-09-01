<template>
  <div class="upload">
    <label for="imgUpload" :class="{upLoading: isUploading}">点击上传</label>
    <input
      id="imgUpload"
      type="file"
      multiple
      accept="image/*"
      @change="onChange"
      ref="file"
      :disabled="isUploading"
    />
    <p>提示：一次可选多张图片，最多不超过九张，单张图片小于1M</p>
    <ul class="imglist">
      <li
        v-for="(item,index) in imgList"
        :key="index"
        :style="{background: `url(${item}) no-repeat center/contain`}"
      ></li>
    </ul>
  </div>
</template>
<script>
import OSS from 'ali-oss'
export default {
  data() {
    return {
      client: new OSS({
        region: 'oss-cn-hongkong',
        bucket: 'test-xfxx',
        accessKeyId: 'LTAI4GAYurxi2zUgdcfKiYJa',
        accessKeySecret: 'NnKAZNaNACcelV6eBpBu9RYDKGRJiG',
      }),
      imgList: [],
      isUploading: false,
    }
  },
  methods: {
    onChange() {
      const newfiles = this.$refs?.file?.files
      const files = []
      if (newfiles.length > 9) {
        alert('最多可以一次选择九张')
        return false
      }
      for (const file of newfiles) {
        const size = file.size / 1024 / 1024
        if (size > 1) {
          alert('单个图片不能大于1M')
          return false
        }
        files.push(file)
      }
      this.uploadFilesByOSS(files)
    },
    uploadFilesByOSS(files) {
      this.isUploading = true
      const uploadRequest = []
      for (const file of files) {
        uploadRequest.push(
          new Promise((resolve, reject) => {
            this.client
              .put(`${Math.random()}-${file.name}`, file)
              .then((res) => {
                resolve(res.url)
                // 赋值放在这里不能保证顺序，先上传完成的在前面
                // this.imgList = [...this.imgList, res.url]
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          })
        )
      }
      //promise.all 有一个失败就全部不显示
      // allSettled 返回所有
      Promise.allSettled(uploadRequest)
        .then((res) => {
          // console.log(res)
          const imgs = []
          for(const item of res) {
            if(item.status === 'fulfilled'){
              imgs.push(item.value)
            }
          }
          this.imgList = imgs
          this.isUploading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style lang="scss">
.upload {
  position: relative;
  label {
    display: block;
    margin: auto;
    color: #fff;
    text-align: center;
    width: 100px;
    height: 30px;
    line-height: 30px;
    background-color: #42b983;
    border-radius: 6px;
    cursor: pointer;
  }
  .upLoading {
    background-color: #000;
  }
  #imgUpload {
    display: none;
  }
  p {
    text-align: center;
    margin-top: 20px;
  }
  .imglist {
    li {
      width: 150px;
      height: 100px;
      float: left;
      margin: 0 30px 30px 0;
    }
  }
}
</style>
