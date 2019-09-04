<template>
   <div>
    <h1 style="color:blue;text-align:center">我的第四阶段</h1>
    </div>
</template>
<script>
export default {
    //调用短消息组件
    created(){
        //vue组件生命周期事件
        this.$toast({message:"添加成功"})
    }
}
</script>
