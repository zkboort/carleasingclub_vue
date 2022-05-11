<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: "App",
}
</script>

<style>
::-webkit-scrollbar-track-piece {
background-color: chartreuse;

}

::-webkit-scrollbar {

width:9px;

  height:9px;

}

::-webkit-scrollbar-thumb {

background-color: #d20ca3;

  background-clip:padding-box;

  min-height:28px;

}

::-webkit-scrollbar-thumb:hover {

  background-color:#bbb;

}
</style>
