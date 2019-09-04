<template>
    <div>
        <h1>Sub09.vue 子组件</h1>
         <!-- 显示父组件数据 -->
         <!-- 为h3绑定点击时间，事件处理函数 -->
        <h3 @click="add3">{{msg}}</h3>
        <h1 style="color:red;font-weight:blod">{{msg}}</h1>
        <!-- 接收图片 -->
        <img :src="img3" />
    </div>
</template>
<script>
export default {
    //2:声明接受父组件数据，msg类型字符串
    props:{
      img3:{default:""},//图片路径
      msg:{default:""},
      add3:{type:Function}//type接收类型
                           //Function 函数类型
    }
}
</script>

