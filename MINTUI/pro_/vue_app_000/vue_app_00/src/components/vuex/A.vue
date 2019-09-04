<template>
    <div>
        <h1>A.vue 演示使用Vuex中集中保存数据</h1>
        <h1>{{$store.getters.getAge}}</h1>
        <h1>{{$store.getters.getList}}</h1>
        <h1>{{$store.getters.getCar}}</h1>
        <button @click="upCar">陈亮老师车升级了</button>
    </div>
</template>
<script>
export default {
    methods:{
        upCar(){
            //调用修改共享数据方式
            this.$store.commit("updateCar");
        }
    }
}
</script>