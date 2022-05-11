const { defineConfig } = require("@vue/cli-service");
let proxyObj={}
//需要代理的路线
proxyObj['/']={
   ws:false,
   //代理目标值
   target: 'http://localhost:8888',
   //发送请求头host会被设置为设置target
   changeOrigin: true,
   //不重写请求地址
   cookiePathRewrite:{
       '^/':'/'
   }
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
      host:'localhost',
      port:8080,
      proxy: proxyObj
  }
});
