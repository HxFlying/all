<template>
    <div>
        <h1>
            Fa09.vue 父组件
        </h1>
      <!-- 调用子组件 -->
        <sub09 msg="测试数据123" :add3="myadd3"
        :img3="require('../../img/xihuan.png')"></sub09>
    </div>
</template>
<script>
//引入子组件
import Sub09 from "./Sub09"
export default {
    //注册子组件
    components:{
        "sub09":Sub09
    },
    methods:{
        myadd3(){
            console.log("父组件创建函数");
        }
    }
}
</script>