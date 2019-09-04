<template>
    <div class="cart">
        <!--1：顶部复选框，全选 -->
        <div class="seletall" >
            全选 <input type="checkbox"  @change=" selectAll"/>
       </div>
        <!--2：商品信息 -->
        <div class="cart-item" v-for="(item,index) of list" :key="index">
            <div class="lefttext">
            <input type="checkbox"  v-model="item.cb" />
             <div class="lname">{{item.lname}}</div>
             <div class="price">{{item.price}}</div>
            </div>
            <mt-button @click="deleteItem" :data-id="item.id">删除</mt-button>
       </div>
        <!--3：购物车中商品数量：删除选中商品，清空购物车  -->
        <div>
            购物车中商品数量
            <span style="color:red">0</span>
            <mt-button  @click="deleteItems">删除选中商品</mt-button>
            <mt-button>清空购物车</mt-button>
        </div>
     </div>
</template>
<script>
export default {
     data(){
        return{
            list:[],   //当前用户购物车列表
       
        }
},  
 created(){
        // 当前组件创建成功回调函数
        this.loadMore();
    },
    methods:{
        selectAll(event){
            //为全选按钮绑定事件 change
            //当全选按钮状态为checked=true
            //所有商品列表 cb=true
            //当全选按钮状态为checked=false
            //所有商品列表cb=false
            //获取当前按钮状态
            var cb = event.target.checked;
            console.log(cb)
            //创建循环遍历所有商品属性cb值与全选状态
            for(var item of this.list){
            
                item.cb = cb

            }

        },
        //删除用户选中的多个商品
         deleteItems(){
           //1:显示确认对话框
             this.$messagebox.confirm("是否删除选中商品").then(res=>{
            //2：创建保存变量保存选中的id值  id
             var id = "";//1,2,3,4
             //3:创建循环遍历数组中每个元素
             for(var item of this.list ){
             //4:判断当前元素属性cb是否等于true
                if(item.cb){
                 //5:拼接id
                   id+=item.id+",";
                   }
                }
                   //6:去除字符串最后一个逗号
                   id= id.slice(0,-1);
                   //7:判断用户是否选中商品，请选择需要删除商品
                   if(id == ""){
                       this.$toast("请选择要删除商品");
                       return;
                   }
                //8：创建url 创建 obj 发送ajax请求
                 var url = "delItems";
                 var obj = {id:id};
                  this.axios.get(url,{params:obj}).then
                  (res=>{
                      if(res.data.code==-1){
                     //9:获取服务器返回数据
                    //10:判断删除多个商品是否成功
                      this.$toast("删除失败");
                      }else{
                         this.$toast("删除成功");
                        //11：刷新操作  loadMore()
                        this.loadMore();
                     }
                  })
                  
                  })
              
              } ,
           deleteItem(event){
                //功能用户点击删除按钮完成删除指定商品任务
                //1:为按钮绑定点击事件调用deleteItem
                //2:显示确认框如果用户选 确定
                this.$messagebox.confirm("是否删除数据").then(res=>{
               //3:将当前商品id传递函数
               var  id=event.target.dataset.id;
                //4:发送ajax请示
                var url="delItem";
                var obj={id:id};
                this.axios.get(url,{
                    params:obj
                }).then(res=>{
                    if(res.data.code == -1){
                    this.$toast("删除成功");
                    this.loadMore();//刷新
                    }else{
                        this.$toast("删除失败");
                    }
                })
                //5:删除成功，提示成功
                }).catch(err=>{

                })
               

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
            //      this.list = res.data.data;
            //      for(var item of this.list){
            //        console.log(this.list)
            //  }
                // 添加一个新属性cb
                //3.1创建循环遍历 res.data.data 中数据
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
    }
}
</script>
<style scoped>
/* 1:商品项目的元素 */
.cart-item{
 display: flex;
 justify-content: space-between; 
 align-items: center; 
 border-bottom:1px solid #ccc; /*底部边线*/
 margin-top:25px;    /*顶部外边距*/
}
/* 修改左侧文字 复选 商品名称 价格 */
.lefttext{
    display: flex; /*子元素水平对齐*/
    align-items: center; /*垂直居中*/
}
/* 修改商品名称 */
.lname{
    margin-left: 25px;
 width: 200px;
}
.price{
    margin-left: 25px;
}
</style>