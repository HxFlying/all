// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
// 云函数入口函数
const rp = require("request-promise");
exports.main = async(event, context)=>{
var url =
`http://api.douban.com/v2/movie/in_theaters`;
url += `?apikey=0df993c66c0c636e29ecbb5344252a4a`
url += `&start=${event.start}`;
url += `&count=${event.count}`;
// 3:发送 ajax请求
return rp(url).then(res => {
return res;
}).catch(err=>{
   console.log(err);
  })
}