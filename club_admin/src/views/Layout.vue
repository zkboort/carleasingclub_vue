<template>
    <div>
      <el-container class="layoutContainer">
        <!--头部-->
        <el-header class="header">
          <!--logo-->
          <a class="logo">Club_Admin</a>
          <!--顶部导航-->
          <el-menu
              :default-active="navBar.active"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
            <el-menu-item :index="index.toString()" v-for="(item,index) in navBar.list" :key="index">{{item.name}}</el-menu-item>
            <el-submenu index="100">
              <template slot="title">
                <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                admin</template>
              <el-menu-item index="2-1">个人中心</el-menu-item>
              <el-menu-item index="2-2">退出登录</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-header>

        <el-container>
          <!--侧边栏-->
          <el-aside width="200px" class="aside">
            <el-menu
                default-active="0 "
                background-color="#303133"
                text-color="#E6A23C"
                style="width: 200px;min-height: calc(100vh - 60px)"
                active-text-color="#ffd04b"
                @select="slideSelect">
              <el-menu-item :index="index.toString()" v-for="(item,index) in slideMenus" :key="index">
                <i class=""></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu>
          </el-aside>

          <!--主体-->
          <el-main class="main">
            <Home></Home>
          </el-main>
        </el-container>
      </el-container>
      <router-view></router-view>
    </div>
</template>

<script>
import Home from "@/views/home/Home";

export default {
  name: "Layout",
  components: [
      Home
  ],
  data(){
     return{
       navBar:{
         active: '0',
         list:[
           {
             name: "首页",
             subActive: '0',
             submenu:[
               {
                 icon: "el-icon-s-home",
                 name: "后台首页",
               },
               {
                 icon: "el-icon-s-shop",
                 name: "商品列表",
               }
             ]
           },
           {
             name: "商品",
             subActive: '0',
             submenu: [
                 {
                   icon: "el-icon-s-shop",
                   name: "商品列表",
                 }

             ]
           },
           {name: "订单"},
           {name: "设置"},
         ]
       }
     }
  },
  computed:{
    slideMenuActive(){
      return this.navBar.list[this.navBar.active].subActive || '0'
    },
    slideMenus(){
      return this.navBar.list[this.navBar.active].submenu || []
    }
  },
  methods: {
    //监听事件，拿到导航索引
    handleSelect(key, keyPath) {
      this.navBar.active=key
    },
    slideSelect(key, keyPath) {
      return this.navBar.list[this.navBar.active].subActive=key
    },
  }
}
</script>

<style scoped>
.logo{
  font-size: 30px;
  color: cornsilk;
  margin-right: auto;
}
.layoutContainer{
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  overflow: hidden;
}
.header{
  display: flex;
  align-items: center;
  background-color: #545c64;
}


</style>