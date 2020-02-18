import axios from 'axios'

export function request(config) {
  const instance=axios.create({
    // baseURL:'http://106.54.54.237:8000/api/v1',
    baseURL: 'http://106.54.54.237:8000/api/hy',
    // baseURL: 'http://123.207.32.32:8000/api/hy',
    timeout: 5000
  })

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    console.log(error);
  });

  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    console.log(error);
  })

  return instance(config)
}
