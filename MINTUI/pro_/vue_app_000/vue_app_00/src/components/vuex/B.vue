<template>
    <div>
        <h1>B.vue 演示使用Vuex中集中保存数据</h1>
         <h1>{{$store.getters.getAge}}</h1>
        <button @click="upCar">陈亮老师车升级了</button>
        <button @click="clearAge">
            清空年龄[异步]
        </button>
       
    </div>
</template>
<script>
export default {
    methods:{
        upCar(){
            //调用修改共享数据方式
            this.$store.commit("updateCar");
        },
        clearAge(){
            this.$store.dispatch("modifyAge")
        }
    }
}
</script>