<template>
  <div class="thanks">
    <Header></Header>
     <div class="thanksWraper">
        <img class="logo" src="../assets/img/form-logo.png" alt="">
        <img class="nowin" src="../assets/img/nowin.png" alt="">
        <router-link to="/form"><div class="back" @click="back"></div></router-link>
        <img src="../assets/img/thanks-bottom.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "nowin",
  props:['count'],
  data: function() {
      return{}
  },
  components: {
    Header
  },
  methods: {
    back(){
        this.$router.push({ path: "/form" });
    }
  }
};
</script>

<style scoped>
/* 未中奖页面 */
.thanksWraper {
  background: rgb(225,3,26);
}
.logo{
    width: 70%;
}
.nowin {
  width: 60%;
  display: block;
  margin: 0px auto;
  margin-top: 38px;
}
.back {
  width: 150px;
  height: 100px;
  margin: 10px auto;
  background: url("../assets/img/back.png") no-repeat;
  background-size: 100% auto;
}
</style>

