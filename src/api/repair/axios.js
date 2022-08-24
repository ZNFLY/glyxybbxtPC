/* 导入官方的axios */
import axios from "axios";
import { ElMessage } from "element-plus";

const instance = axios.create({
  baseURL: "http://localhost:8089",
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

instance.interceptors.request.use(
  config => {
    /*
    请求之前，携带上token
     */
    // let token = sessionStorage.getItem("token");
    let token = "";
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  err => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  err => {
    //如果有具体错误，返回具体的"中文提示"
    console.log(err);
    ElMessage.error(error.data.msg || '服务器出错!')
  }
)


export function get (url, params) {
  return instance.get(url, { params });
}

export function post (url, params) {
  return instance.post(url, params)
}

