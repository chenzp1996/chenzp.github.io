<template>
  <div class="detail">
    <Header></Header>
     <div class="wraper">
        <img class="logo" src="../assets/img/form-logo.png" alt="">
        <img class="prize-content" src="../assets/img/prize-content.png" alt="">
        <img class="left" src="../assets/img/r-left.png" alt="">
        <img class="right" src="../assets/img/r-right.png" alt="">
        <img class="prize-bottom" src="../assets/img/prize-bottom.jpg" alt="">
        <img class="call-btn" src="../assets/img/call-btn.png" alt="" @click="call">
        <div v-if="showCall" class="shadow"></div>
        <img v-if="showCall" class="call-detail" src="../assets/img/call-detail.png" alt="">
        <img v-if="showCall" class="call" src="../assets/img/call.png" alt="">
        <img v-if="showCall" class="cancel" src="../assets/img/cancel.png" alt="" @click="cancel">
        
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "comRecord",
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
    call(){
        this.showCall = !this.showCall;
    },
    cancel(){
        this.showCall = !this.showCall;
    }
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
    
}
.left,.right{
    width: 100px;
    position: absolute;
    top: 200px;
}
.right{
    right: 0;
}

.call-btn{
    width: 100px;
    position: absolute;
    bottom: 20px;
    left: 10px;
}
.call-detail{
    z-index: 2;
    width: 80%;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    margin: auto;
}
.call,.cancel{
    z-index: 3;
    position: absolute;
    width: 100px;
    top: 300px;
    left: 80px;
}
.cancel{
    left: 180px;
}
.shadow{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .9);
}
</style>

