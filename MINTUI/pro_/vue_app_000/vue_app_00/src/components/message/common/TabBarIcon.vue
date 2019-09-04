<template>
    <div>
        <!-- TabBarIcon.vue -->
        <img :src="focused? 
        normalImage:selectedImage" 
        class="imgStyle">
    </div>
</template>
<script>
export default {
    //接受父元素传递数据
    props:{
         focused:false,//选中状态
        selectedImage:{default:""},//选中状态
        normalImage:{default:""},//默认图片
    }
}
</script>
<style scoped>
.imgStyle{
    width: 30px;
    
}

</style>