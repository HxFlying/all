<template>
    <div>
        <h1>Exam05.vue</h1>
        <!-- 父面板 -->
        <mt-tab-container v-model="active">
             <!-- 子面板1 -->
        <mt-tab-container-item id="tab1">
           子面板1
        </mt-tab-container-item>
         <!-- 子面板2 -->
        <mt-tab-container-item id="tab2">
           子面板2
        </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return {active:"tab2"}
    }
}
</script>