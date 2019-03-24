<template>
  <div class="get-bg">
    <Header></Header>
    <div class="wraper">
        <img class="logo" src="../assets/img/form-logo.png" alt="">
        <img class="box" src="../assets/img/p-04.png" alt="">
        <div class="againBtn" @click="again"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "./Header.vue";

export default {
  name="get-bg",
  components: {
    Header
  },
  methods: {},
  created() {}
};
</script>

<style scoped>
.wraper {
  width: 100%;
  background: url("../assets/img/get-bg.png");
  background-size: 100% 100%;
  overflow: hidden;
}

</style>

