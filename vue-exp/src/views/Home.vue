<template>
  <div class="userlist">
    <h3>主页用户信息</h3>
    <div class="sort">
      <button @click="asc">升序</button>
      <button @click="desc">降序</button>
      <button @click="reset">重置</button>
    </div>
    <ul class="userlist">
      <li v-for="item in userList" :key="item.id" class="userInfo">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      userList: null,
    }
  },
  async created() {
    const { data } = await axios.get(
      'http://jsonplaceholder.typicode.com/users'
    )
    // 代理
    this.proxy = new Proxy({}, {
      get(target, key) {
        if (key === 'asc') {
          return [].concat(data).sort((a, b) => (a.name > b.name ? 1 : -1))
        } else if (key === 'desc') {
          return [].concat(data).sort((a, b) => (a.name < b.name ? 1 : -1))
        } else {
          return data
        }
      },
      set() {
        return false
      },
    })
    this.userList = this.proxy.default
  },
  methods: {
    asc() {
      this.userList = this.proxy.asc
    },
    desc() {
      this.userList = this.proxy.desc
    },
    reset() {
      this.userList = this.proxy.default
    },
  },
}
</script>
<style lang="scss">
.userlist {
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
  }
  text-align: center;
  .userInfo {
    padding: 4px;
    list-style: none;
  }
}
</style>
