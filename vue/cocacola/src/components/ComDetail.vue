<template>
  <div class="detail">
    <Header></Header>
     <div class="wraper">
        <img class="logo" src="../assets/img/form-logo.png" alt="">
        <!-- <img class="prize-content" src="../assets/img/prize-content.png" alt=""> -->
        <img class="detail-bottom" src="../assets/img/p-detail-bg.jpg" alt="">
        <img class="back-btn" src="../assets/img/back-btn.png" alt="" @click="back">
        
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "comDetail",
  props:['count'],
  data: function() {
      return{
          showCall:false
      }
  },
  components: {
    Header
  },
  methods: {
    back(){
        this.$router.push({path:"record"});
    },
  }
};
</script>

<style scoped>
.wraper{
    position: relative;
    background: rgb(225,3,26);
}
.logo {
  width: 70%;
}
.prize-content{
    width: 80%;
    display: block;
    margin: 8px auto;
    visibility: hidden;
}

.back-btn{
    width: 100px;
    position: absolute;
    top: 62%;
    left: 0;
    right: 0;
    margin: auto;
}

.detail-bottom{
    margin-top: 151px;
}
</style>

