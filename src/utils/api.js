import { post } from './axios.js'

// 登录
export const login = (url, data) => {
  url = process.env.BASE_URL + url
  return post(url, data) // resfulapi风格
}

// 注册
export const register = (url, data) => {
  url = process.env.BASE_URL + url
  return post(url, data)
}

// 忘记密码
export const forget = (url, data) => {
  url = process.env.BASE_URL + url
  return post(url, data)
}

// 文章
export const article = (url, data) => {
  url = process.env.BASE_URL + url
  return post(url, data)
}
