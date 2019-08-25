//index.html
//<script src="2_index.js">
//var index={}
//<script src="2_details.js">
//var details={}
//<script src="2_router.js">

var routes=[
  {path:"/",component:index},
  {path:"/index",component:index},
  {path:"/details/:lid",component:details,props:true},
  {path:"/login",component:login},
  {path:"/*", component:{
    template:`<main>
      <h2 style="color:red; text-align:center">404: Not Found</h2>
    </main>`
  }}
];
var router=new VueRouter({
  routes //routes:routes
});