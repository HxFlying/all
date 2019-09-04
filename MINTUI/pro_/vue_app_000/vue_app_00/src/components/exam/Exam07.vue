<template>
    <div>
     <h3>底部导航栏</h3>
     <!-- 面板组件 -->
     <mt-tab-container v-model="active">
     <mt-tab-container-item id="tab1" style="color:red" >
         首页 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur quibusdam minima mollitia voluptates laboriosam quidem repellendus, vitae praesentium iure eveniet, deleniti vel. Sit quibusdam possimus illum est nulla nisi!
     </mt-tab-container-item>
     <mt-tab-container-item id="tab2" style="color:blue">
         购物 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, consequatur odit soluta vitae, reiciendis odio et minima voluptatem nostrum facilis sunt recusandae, laboriosam ipsa assumenda nam ipsam fugit officiis sed.
     </mt-tab-container-item>
      <mt-tab-container-item id="tab3" style="color:orange">
         会员Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem animi eligendi nihil! Enim voluptas libero temporibus quisquam minima reiciendis, fuga odit quia voluptatem, quo sed iste voluptatum dolore aut.
     </mt-tab-container-item>
      <mt-tab-container-item id="tab4" style="color:green">
         喜欢 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis veniam eos quas quam reiciendis non distinctio sunt dolorum explicabo voluptatum possimus, magnam natus, atque porro accusamus rem delectus id velit.
     </mt-tab-container-item>
      <mt-tab-container-item id="tab5" style="color:red">
        订单Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt velit ad. Repudiandae expedita nisi modi quia voluptatem error dicta, placeat labore mollitia, distinctio sed sint saepe numquam totam corporis.
     </mt-tab-container-item>
     </mt-tab-container>
     <!-- 底部导航栏 -->
     <mt-tabbar fixed v-model="active" id="dd">
         <!-- 按钮 -->
         <mt-tab-item id="tab1">
             <!-- 为图片添加一个属性：插槽 -->
             <img slot="icon" src="../../img/shouye.png">
             <h5>首页</h5>
              </mt-tab-item>
               <mt-tab-item id="tab2">
             <img slot="icon" src="../../img/gouwu.png">
            <h5> 购物车</h5>
         </mt-tab-item>
               <mt-tab-item id="tab3">
             <img slot="icon" src="../../img/huiyuan.png">
             <h5>会员</h5>
              </mt-tab-item>
               <mt-tab-item id="tab4">
             <img slot="icon" src="../../img/xihuan.png">
             <h5>喜欢</h5>
              </mt-tab-item>
               <mt-tab-item id="tab5">
             <img slot="icon" src="../../img/dingdan.png">
             <h5>订单</h5>
              </mt-tab-item>
     </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
         return{active:"tab1"}
    },
    methods:{

    }
}
</script>
