import Vue from 'vue'
import * as config from './constants'
import api from '../api'
// import axios from 'axios'

// // 定义POST请求方法response.json()
// function post (action, params) {
//   axios.defaults.headers['token'] = config.TOKEN || ''
//   return axios.post(action, params).then((response) => {
//     return response.data
//   }, (error) => {
//     console.log(error)
//     return error
//   })
// }
// function upDate () {
//   config.TOKEN
//   config.USER_INFO
// }
// 定义POST请求方法
function post (action, params = {}) {
  // params.token = window.sessionStorage.getItem('token')
  params.token = config.TOKEN
  if (api[action] === undefined) {
    console.error(`非法的url: ${action},请在api中配置后使用`)
  }
  let url = api[action].url
  return new Promise((resolve, reject) => {
    Vue.http.post(url, params).then((response) => {
      let resp = response.body
      if (resp.status === config.SUCCESS) {
        resolve(resp)
      // else if (resp.status === config.TOKEN_EXPIRED) {
      //   // TODO: token 过期跳转到登录页
      //   console.log('token 过期')
      //   console.log(Vue)
      // }
      } else {
        let msg = resp.message
        let msgArr = []
        try {
          let m = JSON.parse(msg)
          for (let k in m) {
            msgArr.push(m[k])
          }
        } catch (e) {
          msgArr = [msg]
        }
        Vue.prototype.$message(msgArr.join(' '))
        reject(resp)
      }
    }, (error) => {
      console.log(error)
      Vue.prototype.$message('请求失败，请稍后重试')
      reject(error)
    })
  })
}

function formatFileSize (fileSize) {
  let fs = ''
  if (fileSize < 1024) {
    fs = fileSize + 'Byte'
  } else if (fileSize < 1024 * 1024 && fileSize >= 1024) {
    fs = Math.ceil(fileSize / 1024) + 'KB'
  } else {
    fs = Math.ceil(fileSize / (1024 * 1024)) + 'M'
  }
  return fs
}

function ssetItem (obj, aKey = null) {
  let key = new Date().getTime()
  if (aKey) { key = aKey }
  window.sessionStorage.setItem(key, JSON.stringify(obj))
  return key
}

function sgetItem (key) {
  let result = window.sessionStorage.getItem(key)
  if (result !== undefined) {
    return JSON.parse(result)
  }
  return
}

function lsetItem (obj, aKey = null) {
  let key = new Date().getTime()
  if (aKey) { key = aKey }
  window.localStorage.setItem(key, JSON.stringify(obj))
  return key
}

function lgetItem (key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function srmItem (key) {
  return window.sessionStorage.removeItem(key)
}

function lrmItem (key) {
  return window.localStorage.removeItem(key)
}

function redirect (path) {
  window.location.href = path
}

function redirectHome () {
  window.location.href = '/'
}

function fileType (extension) {
  if (!extension) {
    return 'other'
  }
  let type = 'other'
  switch (extension.toString().toLowerCase()) {
    case 'pdf':
      type = 'pdf'
      break
    case 'doc':
    case 'docx':
      type = 'doc'
      break
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
      type = 'img'
      break
    case 'mp3':
    case 'wav':
      type = 'audio'
      break
    case 'ppt':
    case 'pptx':
      type = 'ppt'
      break
    case 'mp4':
    case 'rmvb':
    case 'rm':
    case 'avi':
    case 'mpeg4':
    case 'wmv':
    case 'mov':
      type = 'video'
      break
    case 'xls':
    case 'xlsx':
      type = 'xls'
      break
    default:
      break
  }
  return type
}

function formatDate (date) {
  if (!date) { return '' }
  let dateStr = date.toLocaleDateString()
  let reg = new RegExp('/', 'g')
  return dateStr.replace(reg, '-')
}

function getTs (date) {
  if (!date) {
    console.error('date 对象不能为空')
    return ''
  }
  return date.getTime() / 1000
}

// 年月日
function setDate (time) {
  let date = new Date(time * 1000)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month < 10) {
    month = '0' + month.toString()
  }
  if (day < 10) {
    day = '0' + day.toString()
  }
  return year + '-' + month + '-' + day
}

// 年月日小时
function setDetailDate (time) {
  let date = new Date(time * 1000)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let min = date.getMinutes()
  if (month < 10) {
    month = '0' + month.toString()
  }
  if (day < 10) {
    day = '0' + day.toString()
  }
  if (hour < 10) {
    hour = '0' + hour.toString()
  }
  if (min < 10) {
    min = '0' + min.toString()
  }
  return year + '-' + month + '-' + day + ' ' + hour + ':' + min
}

// 获取地区
function getAddress (val, name, filter) {
  if (val.length >= 1) {
    filter.provinceCode = val[0]
    if (val.length >= 2) {
      filter.cityCode = val[1]
      if (val.length >= 3) {
        filter.districtCode = val[2]
      } else {
        filter.districtCode = ''
      }
    } else {
      filter.cityCode = ''
      filter.districtCode = ''
    }
  } else {
    filter.provinceCode = ''
    filter.cityCode = ''
    filter.districtCode = ''
  }
  console.log(filter)
}

export {
  post, formatDate, formatFileSize, ssetItem, sgetItem, lsetItem, lgetItem, srmItem, lrmItem, redirectHome, fileType, redirect, setDate, setDetailDate, getTs, getAddress
}
