<template>
  <div class="login">
     <h1 class="pageTitle">汽车租凭俱乐部</h1>
     <h1 class="slogan">让生活不失速度与风景</h1>
     <el-form :model="loginForm" ref="loginForm" :rules="rules" class="loginContainer">
       <h3 class="loginTitle">Login</h3>
       <el-form-item prop="username">
         <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
       </el-form-item>
       <el-form-item prop="password">
         <el-input type="password" v-model="loginForm.password" placeholder="请输入用户密码"></el-input>
       </el-form-item>
       <el-form-item prop="verifyCode">
         <el-input type="text" v-model="loginForm.verifyCode" placeholder="点击图片更换验证码" style="width: 150px;margin-right: 10px"></el-input>
         <img :src="kaptchaUrl" @click="updateKaptcha"/>
       </el-form-item>
       <el-checkbox v-model="checked" class="loginRemenber">记住我</el-checkbox>
       <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
     </el-form>
  </div>
</template>

<script>
import {postRequest} from "@/utils/request";

export default {
  name: "Login",
  data(){
    return {
       kaptchaUrl:'/restKaptcha/kaptcha?time='+new Date(),
       loginForm:{
         username:'',
         password:'',
         verifyCode:'',
       },
      checked:true,
      rules:{
         username: [{required:true,message: '请输入用户名',trigger:'blur'}],
         password: [{required:true,message:'请输入用户密码',trigger:'blur'}],
         verifyCode: [{required:true,message:'请输入验证码',trigger:'blur'}]
      }
    }
  },
  methods:{
    updateKaptcha(){
       this.kaptchaUrl='/restKaptcha/kaptcha?time='+new Date();
    },
    submitLogin(){
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          postRequest("/login/systemUserLogin",this.loginForm).then(resp=>{
            if(resp){
              const tokenStr=resp.obj.tokenHead+resp.obj.token;
              window.sessionStorage.setItem("tokenStr",tokenStr);
              //跳转
              this.$router.push("/");
            }
          })
        } else {
          console.log('请完整输入所有信息!!');
          return false;
        }
      });
    }
  }

}
</script>

<style  scoped>
.pageTitle{
  position: absolute;
  color: #23cbe1;
  font-size: 60px;
  top: 10px;
  left: 700px;
}
.slogan{
  position: absolute;
  color: #1d705c;
  font-style: italic;
  font-size: 50px;
  letter-spacing: 10px;
  text-shadow: #18d3a7 1px 2px;
  top: 180px;
  left: 100px;

}
.login{
  height: 100%;
  display: flex;
  width: 100%;
  position: absolute;
  margin: 0 auto;
  background-image: url("~@/assets/images/car06.jpeg");
}
.loginContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 100px 200px 200px 1350px;
  width: 350px;
  height: 380px ;
  padding: 15px 35px 15px 35px;
  background: #141426;
  border: 1px solid #389a83;
  box-shadow: 0 0 25px #23cbe1;
}

.loginTitle{
  margin: 0px auto 40px auto;
  text-align: center;
  color: #d20ca3;
}
.loginRemenber{
  text-align: left;
  margin: 0px 0px 15px 0px;
}

</style>