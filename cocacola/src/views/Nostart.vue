<template>
  <div class="noStart">
    <Header></Header>
     <div class="wraper">
        <img class="logo" src="../assets/img/form-logo.png" alt="">
        <img class="nostart-bottom" src="../assets/img/w-03.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "noStart",
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
  width: 70%;
}
.nostart-bottom{
    margin-top: 31px;
}


</style>

