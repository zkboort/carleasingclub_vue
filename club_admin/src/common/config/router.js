let routes=[
    {
        path: "/",
        name: "layout",
        component: 'Layout',
        children: [
            // {
            //     path: '',
            //     name: 'Home',
            //     component: 'home/Home',
            //     //判断是否登录
            //     meta:{
            //         title: "首页",
            //         isLogin: true,
            //     }
            // },
            {
                path: '/productlist',
                name: "ProductList",
                component:  'shop/goods/ProductList',
                //判断是否登录
                meta:{
                    title: "商品列表",
                    isLogin: true
                }
            },
        ]
    },
    //登录
    {
        path: '/login',
        name: 'Login',
        component: 'login/Login'
    }
]

//获取路由信息的方法
let getRoutes=function (){
    //生成路由详细信息
    createRoute(routes);
    return routes
}

//自动生成路由的方法
function createRoute(arr){
    for (let i = 0;i<arr.length;i++){
        if(!arr[i].component) return
        //自动生成component
        let componentFun = import(`../../views/${arr[i].component}.vue`)
        arr[i].component= ()=>componentFun
        //判断是否存在子路由
        if(arr[i].children && arr[i].children.length>0){
            createRoute(arr[i].children)
        }
    }
}
export default getRoutes()