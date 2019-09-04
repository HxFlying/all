<template>
    <div>
        <!-- <h1>多条消息组件MessageList.vue</h1> -->
        <!-- <h1>将MessageList.vue临时改为全局组件</h1> -->
        <!-- <h1>给组件分配访问路径/MessageList.vue</h1> -->
        <!-- 调用子组件 -->
        <message
        class="itemStyle"
        v-for="(item,index) in rows.data" :key="index"
        :sentime="item.time"
         :title="item.title" 
          :subtitle="item.subtitle"
          :imgurl="require('../../../assets/headIcon/002.jpg')"></message>
    </div>
</template>
<script>
//引入子组件
import Message from "./Message.vue"
// 引入项目的模拟数据
//自动将json文件数据转为 js对象
import json from "../json/messagelist.json" 
export default {
    //注册子组件
    components:{
        "message":Message
    },
    //给子组件传数据
   data(){
       return{
           //保存json中的数据
            rows:json
           //1.给子组件传入标题
           // Title:"前端经验微信群",
            //Subtitle:"小黑:我今天又被拒绝了~",
           // Sentime:"10:31"
       }
   }
}
</script>
<style scoped>
.itemStyle{
    padding: 5px;
    border-bottom: 1px solid #d9d9d9;

}

</style>