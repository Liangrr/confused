// 导入axios实例文件中方法
import { post } from './axios.js'
// 获取项目api请求地址
// let base_api = process.env.BASE_API ? './' + process.env.BASE_API : '..'
// 根据id获取用户信息
const postUserInfoById = (url, data) => {
  url = process.env.BASE_URL + url
  return post(url, data) // resfulapi风格
}

export default { postUserInfoById }
