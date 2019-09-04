import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from "mint-ui"

//1：单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
// main.js配置axios

//2： 引入axios库
import axios from "axios"


//3：引入Vuex 保存共享数据
//第三方的模块
import Vuex from "vuex"

Vue.use(Vuex)
//3:11(先注册再创建存储对象)
 var store = new Vuex.Store({
     state:{//集中管理数据的方法
     age:23,
     list:[1,2,3,5],
     car:"七手QQ"
    
   },
   actions:{
    //集中保存异步修改的函数
    modifyAge:(context)=>{//异步调用clear
          setTimeout(()=>{
          context.commit("clear");
          },1000)
    }
  },
   mutations:{//集中修改数据函数
      clear(state){
        //添加清除年龄的方法
        state.age = 0 ;
      },
       updateCar(state){
         state.car = "三手夏利"
       }
   },
   getters:{//集中获取数据函数
    getAge(state){//特殊:所有函数都有参数
        return state.age;
      
 },getList(state){//集中获取数据函数
     
  return state.list;

 },
 getCar(state){//集中获取数据  car
   return state.car;
 },
 
 
             
   }
 

 })


//4：配置请求时保存的session信息
axios.defaults.withCredentials=true
//配置请求时基础路径
axios.defaults.baseURL="http://127.0.0.1:8080"
// 注册
Vue.prototype.axios=axios;
//注意 地址栏请输必须
//http://127.0.0.1:8080/

//使用组件
Vue.use(MintUI)
//引入图标字体




new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
