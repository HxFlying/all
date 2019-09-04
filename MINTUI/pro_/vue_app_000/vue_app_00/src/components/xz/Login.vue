<template>
    <div class="rootstyle">
        <!-- 登录头标题 -->
       <div class="headtitle">
           <span class="lefttitle">
               登录学子商城
            </span>
              <span class="righttitlemargintop">
              <a class="righttitle"
               href="">新用户注册
              </a>
            </span>
       </div>
       <!-- 标题下面横线 -->
       <div>
       <hr class="linestyle">    
       </div>
       <div>
          <!-- 用户名输入框 -->
         <div class="unamestyle">
           <mt-field label="用户名:" placeholder="请输入您的用户名"
          :attr="{maxlength:12}" v-model="uname"
          class="inputstyle"></mt-field>   
         </div>  
       <!-- 用户密码输入框 -->
         <div class="upwdclass">
           <mt-field label="密码:" placeholder="请输入您的密码"
            :attr="{maxlength:12}" v-model="upwd"
            class="inputstyle"></mt-field>  
            </div>
       <!-- 登录按钮 绑定事件 -->
          <div class="logindiv">
           <mt-button size="large" @click="login" 
           class="loginstyle">登录
         </mt-button>
         </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){return{uname:"",upwd:""}},
        methods:{
            login(){
                //完成用户登录
                //1:获取用户名和密码
                 var u=this.uname;
                 var p=this.upwd;
                var reg=/^[0-9a-z]{3,12}$/i;
                //2:创建正则 3~12 位置 字母 数字
                //3:判断如何错误 用户名提示
                if(!reg.test(u)){
                    this.$toast("用户名格式不对");
                    return;
                }else if(!reg.test(p)){
                    this.$toast("密码格式不对");
                    return;
                }
                //4：判断如何错误 密码提示
                //5:发送ajax
                var url="login";
                var obj={uname:u,upwd:p};
                this.axios.get(url,{params:obj}).then(res=>{
                    console.log(res.data.code);
               //6:接受服务器返回数据
                var code=res.data.code;
                if(code==-1){
                    //7：失败提示
                    this.$messagebox("消息","用户名或密码有误");
                }else{
                //8:成功跳转
                this.$router.push("/product")
                }
            });
        }
    }
}
</script>
<style scoped>
/* 根样式 */
.rootstyle{
    background: url('../../img/bg.png');
    
}
/* 头部标题样式 */
.headtitle{
    display:flex;
    justify-content:space-between;
    
}
/* 按钮样式 */
.loginstyle{
   background: -webkit-linear-gradient(top, #27b0f6 0%, #0aa1ed 100%);
   width: 100px;
   color:#fff;
}
/* 按钮div */
.logindiv{
    display: flex;
     justify-content:center;
     margin-top: 17px;
     padding-bottom: 10px;
}
/* 输入框背景样式 */
.mint-cell:first-child {
background-color:rgba(0,0,0,0.2);
}
/* 输入框文样式 */
.inputstyle{
    color:#fff;
}
/* 头部左标题样式 */
.lefttitle{
    color:#fff;
    font-size: 18px;
    margin-top: 20px;
    margin-left: 10px;
}
/* 头部右标题样式 */
.righttitle{
    color:#fff;
    font-size: 12px;
    text-decoration: none;
  
}
/* 标题右侧div样式 */
.righttitlemargintop{
   margin-top: 20px;
   margin-right: 8px;
}
/* 头部下面横线样式 */
.linestyle{
    margin: 20px 0;
}


</style>