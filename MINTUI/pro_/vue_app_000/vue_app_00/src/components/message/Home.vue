<template> 
   <div class="page-tabbar">
    <div class="page-wrap">
        <!-- 父组件 Home.vue -->
    <!-- 调用子组件 -->
     <titlebar leftTitle="微信(12)" 
     :rightFirstImg="require('../../assets/ic_search.png')"
     :rightSecondImg="require('../../assets/ic_add.png')" 
     :search="mysearch" :add3="myadd3">
    </titlebar>
    <!-- 面板 父面板 子面板 -->
    <!-- 底部导航条 -->
    <!-- 按钮 图片 文字 -->
    <!-- 图片：子组件 点击切换 -->
      <!-- 空div -->
    <div style="margin-top:48px">

    </div>
    <!-- 切换面板列表 -->
    <mt-tab-container 
     v-model="active"
     class="page-tabbar-container">
        <!-- 父面板 -->
    <mt-tab-container-item id="message">
        <!-- 引入消息列表子组件 -->
         <messagelist></messagelist>

    </mt-tab-container-item>
    </mt-tab-container>
    <!-- tabbar列表 -->
    <mt-tabbar fixed v-model="active">
        <mt-tab-item id="message" @click.native="changeState(0)">
         <tabbaricon
          :selectedImage="require('../../assets/ic_weixin_normal.png')"
          :normalImage="require('../../assets/ic_weixin_selected.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
        微信
        </mt-tab-item>
   <mt-tab-item id="contact" @click.native="changeState(1)">
         <tabbaricon
          :selectedImage="require('../../assets/ic_contacts_normal.png')"
          :normalImage="require('../../assets/ic_contacts_selected.png')"
          :focused="currentIndex[1].isSelect">
         </tabbaricon>
         通讯录
        </mt-tab-item>
        <mt-tab-item id="find" @click.native="changeState(2)">
           <tabbaricon
          :selectedImage="require('../../assets/ic_find_normal.png')"
          :normalImage="require('../../assets/ic_find_selected.png')"
          :focused="currentIndex[2].isSelect">
         </tabbaricon>
          发现
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
           <tabbaricon
          :selectedImage="require('../../assets/ic_me_normal.png')"
          :normalImage="require('../../assets/ic_me_selected.png')"
          :focused="currentIndex[3].isSelect">
         </tabbaricon>
          我
        </mt-tab-item>
      </mt-tabbar>
</div>
</div>
</template>
<script>

//引入头部组件
import TitleBar from "./common/TitleBar.vue"

import MessageList from "./common/MessageList.vue"

import TabBarIcon from "./common/TabBarIcon.vue"
export default {
   data(){
    return {
      //面板中显示子组件id
      active:"message",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
    //注册子组件
    components:{
        "titlebar":TitleBar,
        "messagelist":MessageList,
        "tabbaricon":TabBarIcon
    },
   
       methods:{
            mysearch(){console.log("你好")  },
            myadd3(){ console.log("你找谁？")},
          changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
       
      }

    }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.page-tabbar{
    overflow: hidden;
}
.page-wrap{
    overflow: auto;
    padding-bottom: 60px;
}
/*修改 tabbar 默认文字颜色*/
.mint-tabbar>.mint-tab-item{
  color:#999999;
}
/*修改默认tab选中文字样式*/


.mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #45c018 ;
}

</style>