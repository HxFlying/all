<template>
  <div>
    <h1>Exam04.vue</h1>
    <!-- 开关组件:移动项目的使用  -->
    <mt-switch v-model="val2" @click="handle2">开关选项</mt-switch>
    <!-- 单选列表 -->
    <mt-radio title="单选列表"
    :options="options"
    v-model="val4" ></mt-radio>
    <mt-button @click="get4">
        获取东哥的年龄
    </mt-button>
    <!-- 复选框列表 -->
    <mt-checklist title="复选框列表" v-model="val5" :options="['a选项','b选项','c选项']"></mt-checklist>
    <mt-button @click="get5" class="d1">获取值</mt-button>
    </div>
</template>
<script>
export default {
  data() {
    return {  val5:[],//保存复选框选中的值
              val2: true,
              val4:"",
              options:[{label:"去年",value:"24"},
                       {label:"今年",value:"23"},
                       {label:"前年",value:"22"}] };
  },
  methods: {
     get5(){
       console.log(this.val5)//获取复选框选中的值
     }
     ,
    handle2() {
      //状态变化函数
      console.log(this.val2); //状态
    },
      get4(){
      console.log(this.val4)
  }
}
}
</script>
