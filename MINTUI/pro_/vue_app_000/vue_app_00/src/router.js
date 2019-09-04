import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
import Exam01 from "./components/exam/Exam01.vue"
import Exam02 from "./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import Exam04 from "./components/exam/Exam04.vue"
import Exam05 from "./components/exam/Exam05.vue"
import Exam06 from "./components/exam/Exam06.vue"
import Exam07 from "./components/exam/Exam07.vue"
import Fa08 from "./components/exam/Fa08.vue"
import Fa09 from "./components/exam/Fa09.vue"
import TiteFar from "./components/message/Home.vue"
//4:为A.vue与B.vue配置路径
import A from "./components/vuex/A.vue"
import B from "./components/vuex/B.vue"
//微信的消息项目
//1:消息项目入口
//临时全局组件
import MessageList from "./components/message/common/MessageList.vue"
Vue.use(Router)
// 学子用户登录组件
import Login from "./components/xz/Login.vue"
//学子商品列表组件
import Product from  "./components/xz/Product.vue"
//购物车组件
import Cart from "./components/xz/Cart.vue"
export default new Router({
  routes: [
    {path:'/Cart',component:Cart},
    {path:'/Exam07',component:Exam07},
    {path:'/Exam05',component:Exam05},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam04',component:Exam04},
    {path:'/Exam06',component:Exam06},
    {path:'/Fa08',component:Fa08},
    {path:'/Fa09',component:Fa09},
    {path:'/TiteFar',component:TiteFar},
    {path:'/MessageList',component:MessageList},
    {path:'/Login',component:Login},
    {path:'/Product',component:Product},
    {path:'/A',component:A},
    {path:'/B',component:B}
  ]
})
