import router  from "@/router/index.js";

//路由权限处理
router.beforeEach((to,from,next)=>{
    if(to.meta.isLogin){
       let token=false;
       if(token){
           next();
       }else {
           next({
               name: "Login"
           })
       }
    }else {
        next();
    }
})
