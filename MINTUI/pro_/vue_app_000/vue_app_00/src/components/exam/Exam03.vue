<template>
   <div>
       <!-- 表单输入框 -->
    <mt-field label="用户名" placeholder="请输入用户名"
    :attr="{maxlength:12}" v-model="uname"></mt-field><br>
    <mt-field label="密码" placeholder="请输入密码"
    :attr="{maxlength:12}" v-model="upwd"></mt-field><br>
    <mt-field label="年龄" placeholder="请输入年龄"
    :attr="{maxlength:10}" v-model="age"></mt-field>
    <mt-button size="large" @click="reg">用户注册</mt-button>
 </div>
</template>
<script>
export default {
    data(){
    return {uname:"",upwd:"",age:""}
    
    },
    methods:{
        reg(){
            //用户名 密码 正则
            var regu=/^[0-9a-z]{3,12}$/i;
            //正则验证年龄
            var rega=/^[0-9]{2}$/;
        //功能:验证用户输入表单
        //1创建正则表达式 验证用户名 密码 3~12 字母数字
        // 2:创建正则表达式二 年龄 2数字
        // 3:获取到用户名
        var  u=this.uname;
        // 4:获取密码
        var  p=this.upwd;
        // 5:获取年龄
        var  a=this.age;
        // 6:验证用户名，如果出错级高一些交互
        if(!regu.test(u)){
           this.$messagebox("消息","用户名不对");
             //停止当前函数继续执行
              return;
        }
        // 7:验证密码，如果出错高级别交互
        if(!regu.test(p)){
            this.$messagebox("密码","密码格式不对");
            return;
        }
        // 8:验证年龄，如果出错高级别交互
         if(!rega.test(a)){
            this.$messagebox("年龄","年龄格式不对");
            return;
        }
        // 9:验证成功 ajax请求
        console.log(u,p,a)
        }
    }
}
</script>