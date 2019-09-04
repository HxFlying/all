<template>
    <div class="rootstyle">
      <!-- 一条消息子组件 -->
      <div class="leftimgandlabel">
      <!-- 左侧图片 -->
      <div class="leftimgtxt">
          <img :src="imgurl" class="imgstyle"/>
    </div>
      <!-- 标题和子标题 -->
      <div class="rightOfimg">
       <span class="titleable">{{title}}</span>
       <span class="subtitle">{{subtitle}}</span>
      </div>
      </div>
      <!-- 右侧时间 -->
      <span class="sendtime">{{sentime}}</span>
    </div>
</template>
<script>
export default {
    //1. 在模板中创建4个变量接受父元素数据
    props:{
        title:{default:""},
        subtitle:{default:""},
        sentime:{default:""},
        imgurl:{default:""}
    // 图片。标题。子标题 发送时间
    //2.添加属性接受父元素
    // imageurl / title/subtitle/sentime
     //3.修改MessageList.vue 传递四个数据
}
}
</script>
<style scoped>
/* 为根元素添加弹性布局 */
.rootstyle{
    display: flex;/* 弹性布局 */
    justify-content: space-between;/* 子元素两端对齐 */
    align-items: center;   /* 子元素垂直居中 */
}
/* 左侧图片与文字弹性布局 */
.leftimgtxt{
    display: flex;/*  */
    align-items: center;/* 子元素垂直居中 */
}
/* 图片 */
.imgstyle{
    width: 50px;/*  */
    height: 50px;/*  */
}
/* 标题与子标题按照列排放 */
.rightOfimg{
    display: flex;  /* 弹性布局 */
    flex-direction: column;  /*按列排放子元素  */
    justify-content: center;/*  */
    margin-left:7px;  /* 与左侧图片间距 */
}
/* 标题 */
.titleable{
   color: black;
   font-size: 17px;
}


/* 子标题 */
.subtitle{
 color:gray;
 margin-top: 4px;
}
.leftimgandlabel{
    display: flex;
}

</style>