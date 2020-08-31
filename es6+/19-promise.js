// Ajax
// 兼容老浏览器
// if (window.XMLHttpRequest) {
//   xmlHttp = new XMLHttpRequest()
// }else {
//   xmlHttp= ActiveXObject('Microsoft.XMLHTTP')
// }
let testurl = 'http://rap2.taobao.org:38080/app/mock/117394/index/banner'
function ajax(url, callback) {
  let xmlHttp
  xmlHttp = new XMLHttpRequest()
  xmlHttp.open('GET', url, true)
  xmlHttp.send()
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      let obj = JSON.parse(xmlHttp.responseText)
      callback(obj)
    }
  }
}

// ajax(testurl, res => {
//   console.log(res)
// })

// 回调地狱 call hell
ajax('static/a.json', res => {
  console.log(res)
  ajax('static/b.json', res => {
    console.log(res)
    ajax('static/c.json', res => {
      console.log(res)
    })
  })
})

// promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('settimeout')
    resolve('success')
  }, 1000)
}).then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)

// promise ajax

const pAjax = url => {
  return new Promise((resolve, reject) => {
    let xmlHttp
    xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', url, true)
    xmlHttp.send()
    xmlHttp.onload = function () {
      if ((xmlHttp.status >= 200 && xmlHttp.status < 300) || xmlHttp.status == 304) {
        let data = JSON.parse(xmlHttp.responseText)
        resolve(data)
      } else {
        reject('request error')
      }
    }
  })
}
pAjax(testurl)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
