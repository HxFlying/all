<template>
    <div class="page-head">
        <!-- 顶部导航栏组子件 -->
        <!-- 左侧文字 -->
    <span >{{leftTitle}}</span>
    <!-- 右侧图片 -->
    <div class="right-head">
    <div @click="search"   class="searchdiv">
        <img :src="rightFirstImg" 
         style="width:25px"></div>
    <div @click="add3" class="searchdiv" 
     style="margin-left:20px" >
      <img :src="rightSecondImg" style="width:25px;margin-right:20px"></div>  
    </div>  
    </div>
</template>
<script>
export default {
    props:{
        leftTitle:{default:""},//左侧文字
        rightFirstImg:{default:""},//第一张图
        rightSecondImg:{default:""},//第二张图
        search:{type:Function},//事件处理函数
        add3:{type:Function}//搜索 添加
    }
}
</script>
<style scoped>
/*1. 最外层父元素 */
/*2. 右侧图片区域 */
/*3. 图片div */
.page-head{
    display: flex;  /*  父元素弹性布局*/
    position: fixed;/*  固定不随鼠标滚动*/
    z-index: 999;/* 浮动所有元素上方*/
    width: 100%;
    justify-content: space-between;/*两端对齐  */
    align-items: center;/*  垂直居中*/
    background-color:#393a3e;/* 灰青背景*/ 
    padding-left: 7px;  /* 内边距*/
    padding-left: 7px;
    height: 48px;
    color: #fff;  /* 文字颜色*/
    font-size: 18px;
    }
    /* 右侧图片区域 */
  .right-head{
    display: flex;}
    /* 图片div */
    .searchdiv{
      display: flex;
      align-items: center;  
      height: 48px;
    }

</style>