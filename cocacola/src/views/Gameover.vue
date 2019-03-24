<template>
  <div class="noStart">
    <Header></Header>
     <div class="wraper">
        <img class="logo" src="../assets/img/end-01.jpg" alt="">
        <img class="beatif" src="../assets/img/end-02.jpg" alt="">
        <img class="gameover-bottom" src="../assets/img/end-03.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "gameover",
  data: function() {
      return{

      }
  },
  components: {
    Header
  },
  methods: {
  }
};
</script>

<style scoped>
.wraper{
    position: relative;
    background: RGB(244,0,8);
}
.logo {
  width: 30%;
  vertical-align: top;
}
.beatif{
  width: 30%;
  margin-left: 100px;
}
.gameover-bottom{
  margin-top: 57.5px;
  width: 200px;

}


</style>

