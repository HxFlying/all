<template>
    <div class="product_app">
        <!-- 商品列表 -->
        <!-- 此div代表一个商品 -->
        <div class="goods_item" v-for="(item,index) of list" :key="index">
            <!--1 商品图片 -->
            <img :src="'http://127.0.0.1:8080/'+item.img_url" />
            <!--2 商品名称 -->
            <h5>{{item.lname}}</h5>
            <!--3 商品按钮 -->
            <div class="info">¥{{item.price.toFixed(2)}}</div>
            <!--4 加入购物车 -->
            <mt-button class="buttonStyle" :data-lid="item.lid" 
            :data-price="item.price" :data-lname="item.lname" :data-img_url="item.img_url"
             @click="addcart">加入购物车</mt-button>
 </div>
       <!-- 点击加载更多显示下一页 -->
      <!-- 下一页保存上一页数据 -->
     <mt-button size="large" @click="loadMore" class="buttonStyle">加载更多</mt-button>
     <mt-button class="buttonStyle" @click="jumpCart">查看购物车</mt-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            list:[],  //保存服务器返回的商品列表
            pno:0 //当前页码0
            
        }
    },
    created(){
     this.loadMore();
    },
    methods:{
        jumpCart(){
            //跳转购物车
            this.$router.push("/Cart");
        },
        loadMore(){
   //功能一：当前组件获取第一页数据
   //1:创建url地址
   var url="product";
     //1.1 
      this.pno++;
      var obj={pno:this.pno}
   //2:发送ajax请求第一页数据
   this.axios.get(url,{params:obj}).then(res=>{
       //将数据保存到data中
       console.log(res.data)
       //this.list=res.data.data;
       //数组拼接操作
       var rows=this.list.concat(res.data.data);
       //赋值
       this.list=rows;
    })
  },
// 商品加入购物车
  addcart(event){
    //获取购物车数据(模板中数据)#自定义属性
    var lid = event.target.dataset.lid;   
    var price = event.target.dataset.price;   
    var lname = event.target.dataset.lname;
    var img_url = event.target.dataset.img_url;
    
    //创建url
    var url = "addcart";
    var obj = {lid:lid,lname:lname,price:price,img_url:img_url};
    // 发送ajax请求
    this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code == -1){
            //显示提示框
             this.$messagebox("消息","请登录")
              //跳转到登录
             .then(res=>{this.$router.push("/Login");
             
             });
            
             
        }else if(res.data.code == -2){
            this.$messagebox("消息","添加失败");

        }else{
            this.$messagebox("消息","添加成功");

        }
        //console.log(res);
        //获取服务器返回数据
        //
    })   
  }
}
// 添加购物车函数

}
</script>
<style  scoped>
/*1： 最外层父元素:弹性布局 */
.product_app{
    display: flex;
    flex-wrap: wrap;/*换行*/
    justify-content: space-around;
    padding: 4px; 
}
/*2： 当前商品宽度 49% */
.goods_item{
    width: 49%;  
    border:1px solid #ccc;
    border-radius: 5px;/*圆角*/
    padding:2px; 
    box-sizing: border-box;/*重新计算元素宽度* / */
    display: flex;
    flex-direction: column;/*商品内容按列排放*/
    min-height: 240px;/*高度*/
}
/*3： 当前商品中图片 */
.goods_item img {
    width: 100%;
}
/*4： 修饰当前商品价格 */
.goods_item .info{
    color: red;
    font-size: 19px;
}
/* 5 按钮样式 */
.buttonStyle{
     background: -webkit-linear-gradient(top, #27b0f6 0%, #0aa1ed 100%);
  
   color:#fff;
}
</style>