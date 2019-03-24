<template>
  <div id="app">
   <Nav></Nav>
   <router-view></router-view>
  </div>
</template>

<script>
//初始化css样式
import "./assets/css/reset.css";
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: {
    Nav
  }
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
