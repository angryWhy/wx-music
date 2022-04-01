const BASE_URL = "http://123.207.32.32:9001"
class WzRequest {
    request (url,method,param){
        return new Promise((resolve,reject)=>{
          wx.request({
          url: BASE_URL+url,
          method:method,
          data:param,
          success(res){
              resolve(res)
          },
          fail(err){
              reject(err)
          }
        })})
    }
    get(url,param){
        return this.request(url,"GET",param)
    }
    post(url,data){
        return this.request(url,"POST",data)
    }
}
const wzxRequest = new WzRequest()
export default  wzxRequest
