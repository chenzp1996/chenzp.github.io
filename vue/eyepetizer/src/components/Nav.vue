<template>
  <div class="nav">
    <router-link class="nav-link adv" to="adv">广告</router-link>
    <router-link class="nav-link post" to="post">日报</router-link>
    <router-link class="nav-link game" to="game">游戏</router-link>
    <router-link class="nav-link animal" to="animal">萌宠</router-link>
  </div>
</template>

<script>
export default {
  name: "nav",
  data:function(){
    return {
    
    }
  },
  props: []
};
</script>

<style lang="less" scoped>
.nav-link{
  display: inline-block;
  width: 25%;
  height: 30px;
  text-align: center;
  text-decoration: none;
  color:RGB(153,153,153);
  line-height: 30px;

  &:hover{
    border-bottom: 1px solid rgb(255, 255, 255)
  }
}
</style>
