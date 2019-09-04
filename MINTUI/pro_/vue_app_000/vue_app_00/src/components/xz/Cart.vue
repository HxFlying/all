<template>
<div class="rootstyle">
    <div class="h1color">
    <h1>购物车列表</h1>
    </div>
<div class="head">
    
 <!-- 全选按钮 --> 
 <div class="allbtn"> 
<label for="selc">
<input type="checkbox"  id="selc">
<span class="allselfont" >全选</span>
</label>
</div>
<!-- 总删除按钮 -->
<div class="allbtndel">
    <button @click="delallproc">×</button>
</div>
</div>

<!-- 商品列表 -->
<div class="productstyle" v-for="(item,index) of list" :key="index">
    <!-- 商品编号按钮 -->
    <div class="">
    <!-- 复选框按钮 -->
   <input type="checkbox" v-model="item.is_checked">
   </div>
  <!-- 商品图片 -->
       <div class="imgstyle">
      <img :src="'http://127.0.0.1:8080/'+item.img_url"  />
      </div>
  <!-- 商品标题和价格 -->
 <div class="productinfo"> 
     <!-- 商品名字 -->
     <div class="lnamestyle">
      <span class="lnamefont">{{item.lname}}</span>
      </div>
      <!-- 价格 -->
      <div  class="pricestyle">
      <span class="pricefont">单价:¥{{item.price.toFixed(2)}}</span>
      </div>
      <!-- 商品编号 -->
      <div class="productid">
      <span class="tidfont">商品编号:{{item.id}}</span>
      </div>
      <div class="countfontstyle">
          <span class="numfont">数量:</span>
       <button @click="chan"  :data-index="index" :data-counts="item.count" :data-n="-1" >-</button>
         <span class="countfont" v-text="item.count"></span>
       <button @click="chan" :data-counts="item.count" :data-n="+1" :data-index="index">+</button>
     </div>
     <!-- 合计 -->
     <div class="countadd">
         <h3 class="countaddfont">总价:¥{{item.count*item.price}}</h3>
   </div>
   <!-- 单个删除按钮 -->
       <div class="singelstyle">
    <button @click="delproduct" :data-i="index" >×</button>
     </div>
</div> 

</div> 
<div class="submitandsum">
<!-- 合计按钮 -->
<div class="priceall">
    <span class="priceallstyle">合计:¥{{total.toFixed(2)}}</span>
</div>
<!-- 提交按钮 -->
<div class="sumbtn"> 
    <mt-button class="substyle" >提交</mt-button>
   </div>
 </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            list:[],   //当前用户购物车列表
            price:"",
            n:0,
            chk:false,
          
          
            
        }
    },
    created(){
        // 当前组件创建成功回调函数
        this.loadMore();
    },
     methods:{
      
       

         //加减数量按钮
         chan(e){
             //传入数量
             var sum=e.target.dataset.counts;
             var i=e.target.dataset.n;
             var index=e.target.dataset.index;
             //判断i的正负值
             if(i<1){
             this.list[index].count--;  
             }else {
            this.list[index].count++;};
            if(this.list[index].count<1){
                this.list[index].count=0;
                 this.$messagebox
            .confirm("是否删除此商品！")//确认内容
            .then(res=>{
               
                this.list.splice(index,1)
            }).catch(err=>{         //取消后回调函数
                console.log(err);
            })

            }
        },
        //删除全部商品按钮函数
        delallproc(e){
            this.$messagebox
            .confirm("是否删除全部商品！并返回商品列表页")//确认内容
            .then(res=>{          //确认执行成功后回调用
                if(e.target.nodeName== "BUTTON"){
              //获取数组长度
                var length = this.list.length;
                this.list.splice(0,length);
                this.$router.push("/product");
            }
            }).catch(err=>{         //取消后回调函数
                console.log(err);
            })
            //确认，消息框 异步
            
        },
        // delallproc(e){
        //     if(e.target.nodeName== "BUTTON"){
        //       //获取数组长度
        //        var length = this.list.length;
        //         this.list.splice(0,length);
        //     }
        // },
        // 单个删除按钮 
        delproduct(e){
            if(e.target.nodeName== "BUTTON"){
                var i=parseInt(e.target.dataset.i)
                if(this.list.length==1){
                     this.$messagebox
            .confirm("是否删除最后一件商品！并返回列表页")//确认内容
            .then(res=>{          //确认执行成功后回调用
               this.$router.push("/product");
           }).catch(err=>{         //取消后回调函数
                console.log(err);
            })
             }
                else{this.list.splice(i,1);}
               
            }

        },
         loadMore(){
            // 功能:获取当前用户购物车列表
            // 1:创建url请求服务器地址
            var url="carts";
            // 2：发送ajax请求 请求(让服务器程序完成功能)
            this.axios.get(url).then(res=>{
                if(res.data.code == -1){
              // 4：如果服务器返回-1 请登录
              this.$messagebox("消息","请登录").then(res=>{
                 //回调函数(用户点击确认按钮后调用)
                 this.$router.push("/Login")
               })
          }else{// 3：获取服务器返回数据
                   var rows = res.data.data;
               for(var item of rows){
                   //3.2为其添加属性cb值false
                   item.cb = false;
                }
                //3.3将新数组赋值list(顺序)
                 this.list = rows;
             }
            
          })
         }
     },
     computed:{
        total(){
            // //单选按钮计算属性，选中才计算总价
                var total=0;
                for(var item of this.list){
                    if(item.is_checked){
                       
                     total+=item.price*item.count
                      }
           }  return total;
         }
    }
}
</script>
<style scoped>
/* 最外层浮动换行 */
.rootstyle{
    display: flex;
    flex-wrap: wrap;
   
    
}
/* 商品列表最外面 */
.productstyle{
  display: flex;
  padding: 5px;
  border:1px solid #ccc;
  width:100%;
  border:2px solid red;
  border-radius: 5px;
 
  
}
/* 信息和价格最外面样式 */
.productinfo{
    margin-left:10px; 
    padding-top: 10px;
    
}
/* 头部样式 */
.head,.h1color{
    background-color:red;
    width: 100%;
    color:floralwhite;
    padding: 1px;
   
 

  
}
/* 头部文字样式 */
.headfont{
    font-size: 20px;
    text-align: center;
    
     
}
/* 全选按钮样式 */
.allbtn{
    margin-left:5px; 
}
/* 全选按钮文字样式 */
.allselfont{
    font-size: 15px;
    
}
/* 图片样式 */
.imgstyle{
    margin-left: 5px;
}
/* 商品名字样式 */
.lnamefont{
    font-size: 18px;
    font-weight:bold
}
/* 单价、数量 、总价样式 */
.pricefont,.countaddfont,.tidfont,.numfont{
    font-size:13px;
    color: #666;
}
/* 价格字样式 */
.countaddfont,.pricefont{
    color:red;
}
/* 单个删除button样式 */
.singelbtn{
        font-style: italic;
        color:red;
        font-size: 10px;
}
/* 单个删除按钮 */
.singelstyle{
    margin-left:150px; 
}
/* head样式 */
.head{
    display: flex;
    justify-content: space-between;
}
/* 总删除按钮 */
.allbtndel{
    margin-right:5px;
    margin-bottom:5px;  
}
/* 合计样式 */
.priceall{
   
    width: 100%;
   
    line-height: 100px;
    font-size: 25px;
    margin-left: 10px;
   
}
/* 合计文字样式 */
.priceallstyle{
   font-style: italic;
    height:40px;
    color:#000;
    font-size: 25px
    
}
/* 提交和合计样式 */
.submitandsum{
 background-color: red;
 display: flex;
 justify-content: space-around;
 width: 100%;
 border:1px solid #fff;
 padding: 2px;
 border-radius: 5px;
}
/* 提交按钮 */
.sumbtn{
    display: flex;
   justify-content: space-around;
   width:80px;
   margin-right:20px; 
   align-items: center;
 
}
/* 提交按钮样式 */
.substyle{
    color:red;
    
    background-color: aliceblue

}
/* 总价文字样式 */
.countaddfont{
    margin:0;
  
   
}

/* 数量字体样式 */
.countfont{
    font-size: 10px;
    min-width: 20px;
    padding: 5px;
    margin:0 5px; 
    
   
}


</style>