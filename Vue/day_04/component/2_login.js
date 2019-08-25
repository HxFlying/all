var login={
  template:`<main>
    用户名: <input v-model="uname"><br>
    密码: <input v-model="upwd" type="password"><br>
    <input type="button" value="登录" @click=login>
  </main>`
,
data(){
  return{
    
    uname:"dingding",
    upwd:"123456"
  }
},
methods:{
  login(){
    if(this.uname=="dingding"&&this.upwd=="123456"){
      alert("登录成功，马上转到首页")
      this.$router.push("/")
    }else{
      alert("您的用户名或者密码错误")
     
    }
    
    this.uname="";
    this.upwd="";
   
    
  }
  
}
}