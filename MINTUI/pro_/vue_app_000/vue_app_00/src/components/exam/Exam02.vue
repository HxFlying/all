<template>
<div>
    <button @click="load" style="color:yellow;background-color:#226611">点击删除
 </button>
    <button @click="load1">显示交互1</button>
    <button @click="load2">显示交互2</button>
    <button @click="load3">显示交互3</button>
    </div>
</template>
<script>
export default {
    methods:{
        load(){
            this.$toast({
                message:"删除成功",
                position:"middle",
                iconClass:"icon icon-chengg"
                
                })
        },
        load1(){
            //this.$messagebox("消息","数据加载成功");
            this.$messagebox("","数据加载成功");

        },
        load2(){
            this.$messagebox
            .confirm("是否删除指定数据")//确认内容
            .then(res=>{          //确认执行成功后回调用
                console.log(res);
            }).catch(err=>{         //取消后回调函数
                console.log(err);
            })
            //确认，消息框 异步
            
        },
        load3(){
            this.$messagebox.prompt("请输入卡号")
            .then((value)=>{//输入成功回调
                console.log(value);//输入内容
            }).catch(err=>{    //取消回调     
                console.log(err);
            })    
              
            },
        }
        
    

}
</script>