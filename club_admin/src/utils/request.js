import axios from 'axios';
import {Meassage} from 'element-ui';
import router from '../router/index.js';

let baseUrl='localhost:8888';

//json格式的post请求
export const postRequest=(url,params)=>{
    return axios({
        method: 'post',
        url:`${baseUrl}${url}`,
        data: params
    })
}

//请求拦截器
axios.interceptors.request.use( config=>{
    //如果存在token，请求携带Token
    if(window.sessionStorage.getItem("tokenStr")){
        config.headers['Authorization']=window.sessionStorage.getItem("tokenStr");
    }
    return config

},error =>{
    console.log(error);
})




axios.interceptors.response.use(success=>{
    //请求成功但是，业务逻辑错误，没有返回数据
    if(success.status&& success.status==200){
        //判断是否是业务逻辑错误
        if(success.data.code==500||success.data.code==501|| success.data.code==607){
            Meassage.error({message:success.data.message});
            return
        }
        if(success.data.message){
            Meassage.success({message:success.data.message});
        }
    }
    //响应成功，返回数据
    return success.data
 }, //请求都失败了
    error => {
    if(error.response.code==404||error.response.code==504){
        Meassage.error({message:"服务器找不到了！o( ╯□╰ )o"});
    }else if(error.response.code==609){
        Meassage.error({message:"权限不足，请联系管理员"});
    }else if(error.response.code==401){
        Meassage.error({message: "未登录！请先登录！"});
        router.replace('/login');
    }else {
        //如果返回数据有响应信息，则提示响应信息
        if(error.response.data.message){
            Message.error({message:error.response.data.message})
        }else {
            Meassage.error({message:"未知错误！"})
        }
    }
    return;
});


