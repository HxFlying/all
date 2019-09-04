<template>
    <div>
        <mt-tab-container v-model="active" >
            <!-- 美食 -->
        <mt-tab-container-item id="tab1">
           <div> 美食</div>
        </mt-tab-container-item>
        <!-- 购物 -->
        <mt-tab-container-item id="tab2">
            <div> 购物</div>
        </mt-tab-container-item>
        <!-- 休闲 -->
        <mt-tab-container-item id="tab3">
           <div> 休闲</div>
        </mt-tab-container-item>
        </mt-tab-container>
        <mt-button @click="active='tab1'">美食</mt-button>
        <mt-button @click="active='tab2'">购物</mt-button>
        <mt-button @click="active='tab3'">休闲</mt-button>
         </div>
</template>
<script>
export default {
    data(){
        return{active:"tab1"}
    },
    // methods:{
    //     tab1(){
    //         this.active="tab1"
    //     },
    //     tab2(){
    //        this.active="tab2"
    //     },
    //     tab3(){
    //         this.active="tab3"
    //     }
    // }
}
</script>