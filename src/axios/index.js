import axios from 'axios'

//统一请求资源地址
axios.defaults.baseURL="http://localhost:8080/"

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

var http = {

    /** get 请求
     * @param  {接口地址} url
     * @param  {请求参数} params
     */
    get: function(url,params){
      return new Promise((resolve,reject) => {
        axios.get(url,params)
        .then((response) => {
          resolve( response.data );
        })
        .catch((error) => {
          reject( error );
        });
      })
    },
    /** post 请求
     * @param  {接口地址} url
     * @param  {请求参数} params
     */
    post: function(url,params){
      return new Promise((resolve,reject) => {
        axios.post(url,params)
        .then((response) => {
          resolve( response.data );
        })
        .catch((error) => {
          reject( error );
        });
      })
    }
  }
  export default http
