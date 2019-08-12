//练习: 创建web服务器，托管静态资源到public目录下，浏览器向服务器请求login.html
const express=require('express');
var app=express();
app.listen(8080);

//托管静态资源到public目录
app.use( express.static('public') );

//根据表单的请求，创建对应的路由
app.post('/mylogin',function(req,res){
  res.send('登陆成功');
});


