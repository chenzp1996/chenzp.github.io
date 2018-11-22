<template>
  <div class="form">
    <Header></Header>
    <!-- vue-touch -->
    <v-touch  v-on:panend="onPanend">
        <div class="wraper" v-if="canPanend && count > 0">
            <img class="logo" src="../assets/img/form-logo.png" alt="">
            <img class="deer" v-if="canPanend  && count > 0" src="../assets/img/g-1.png" alt="">
            <img class="car" v-if="canPanend && count > 0" src="../assets/img/g-car.png" alt="">
            <div class="carwraper" v-if="canPanend && count > 0">
                <img class="carBox" src="../assets/img/g-box.png" alt="">
                <img class="count" v-if="count === 3" src="../assets/img/t-03.png" alt="">
                <img class="count" v-if="count === 2" src="../assets/img/t-02.png" alt="">
                <img class="count" v-if="count === 1" src="../assets/img/t-01.png" alt="">
                <img class="arraw" src="../assets/img/g-arraw.png" alt="">
                <img class="hand" src="../assets/img/g-hand.png" alt="">
            </div>
        </div>
    </v-touch>
    <div class="boxWraper"  v-if="!canPanend">
        <div>{{num}}</div>
        <img class="logo" src="../assets/img/form-logo.png" alt="">
        <img class="shendan" v-if="num === 0 || (count > 0 && num !== 0)" src="../assets/img/shen-dan.png" alt="">
        <img class="huahuan" v-if="num !== 0 &&  count === 0" src="../assets/img/get-01.png" alt="">
        <img class="prize1" v-if="(num === 1 && count === 0)" src="../assets/img/g-prize-01.png" alt="">
        <img class="prize2" v-if="(num === 2 && count === 0)" src="../assets/img/g-prize-02.png" alt="">
        <img class="prize3" v-if="(num === 3 && count === 0)" src="../assets/img/g-prize-03.png" alt="">
        <img class="getSucc" v-if="get === true" src="../assets/img/get-succ.png" alt="">
        <img class="box" src="../assets/img/p-04.png" alt="">
        <div class="againBtn" v-if="(count >= 1 && num !== 0) || (num === 0)" @click="again"></div>
        <div class="getBtn" v-if="(count < 1) && (num === 1||num === 2||num === 3)" @click="getPrize"></div>
        <div class="recordBtn" v-if="get" @click="record"></div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";



export default {
  name: "inputForm",
  data: function() {
    return {
      count: 3, //可抽奖次数
      canPanend: true, //能否滑动
      get:false,
      num: this.num = Number(this.$parent.$data.number),//保存从form传过来的值
    };
  },
  components: {
    Header
  },
  methods: {
    onPanend() {
      if (this.count > 0) {
        this.canPanend = !this.canPanend;
        this.count--;
      }
    },
    again() {
      if (this.count > 0) {
        this.canPanend = !this.canPanend;
      } else {
        this.$router.push({ path: "nowin" });
      }
    },
    getPrize(){
        this.get = !this.get;
    },
    record(){
      this.$router.push({path:"record"});
    }
  },
};
</script>

<style scoped>
.wraper {
  height: 590px;
  background: url("../assets/img/game-bg.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
}
.logo {
  position: absolute;
  z-index: 999;
  width: 70%;
  /* top: 0; */
}
/* 鹿 */
.deer {
  position: absolute;
  bottom: 50px;
  left: -220px;
  animation: deermove 2s forwards;
}
@keyframes deermove {
  0% {
    bottom: 50px;
    left: -220px;
    transform: rotateZ(0deg);
  }
  25% {
    bottom: 100px;
    left: -220px;
    transform: rotateZ(-30deg);
  }
  50% {
    bottom: 50px;
    left: -220px;
    transform: rotateZ(0deg);
  }

  100% {
    bottom: 50px;
    left: 240px;
  }
}
.car {
  position: absolute;
  bottom: 50px;
  left: -375px;
  animation: carmove 1s forwards;
  animation-delay: 1s;
}
@keyframes carmove {
  0% {
    bottom: 50px;
    left: -375px;
  }

  100% {
    bottom: 50px;
    left: -25px;
  }
}
.carBox {
  width: 100px;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: auto;
}
.arraw {
  width: 60px;
  position: absolute;
  top: 250px;
  left: 0;
  right: 0;
  margin: auto;
}
.count {
  width: 60%;
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  margin: auto;
}
.hand {
  width: 50px;
  position: absolute;
  top: 200px;
  right: 110px;
  animation: handmove 2s infinite;
}
@keyframes handmove {
  0% {
    top: 200px;
  }
  90% {
    top: 110px;
  }
  100% {
    opacity: 0;
  }
}
.carwraper {
  opacity: 0;
  animation: appear 1s forwards;
  animation-delay: 2s;
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* 上划出现的盒子 */
.boxWraper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: url("../assets/img/bg-01.jpg") no-repeat;
  background-size: 100% 100%;
}
.box {
  position: absolute;
  width: 150px;
  top: 150px;
  left: 0;
  right: 0;
  margin: auto;
  animation: openbox 1s forwards;
}
@keyframes openbox {
  0% {
    transform: rotateZ(-30deg);
  }
  25% {
    transform: rotateZ(30deg);
  }
  50% {
    transform: rotateZ(-20deg);
  }
  75% {
    transform: rotateZ(20deg);
  }
  100% {
    transform: rotateZ(0deg);
    opacity: 0;
  }
}
.shendan {
  width: 80%;
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  margin: auto;
  transform: scale(0);
  animation: shendan 1s forwards;
  animation-delay: 1s;
}
@keyframes shendan {
  from {
    transform: scale(0);
    
  }
  to {
    transform: scale(1);
  }
}

.huahuan{
  width: 80%;
  position: absolute;
  top: 180px;
  left: 0;
  right: 0;
  margin: auto;
   transform: scale(0);
  animation: shendan 1s forwards;
  animation-delay: 1s;
}
.prize1,.prize2,.prize3,.getSucc{
  width: 80%;
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  margin: auto;
  transform: scale(0);
  animation: shendan 1s forwards;
  animation-delay: 1s;
}
.getSucc{
  top: 220px;
}

.againBtn {
  width: 150px;
  height: 50px;
  background: url("../assets/img/again.png") no-repeat;
  background-size: 100% auto;
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999;
  transform: scale(0);
  animation: shendan 1s forwards;
  animation-delay: 1s;
}
.getBtn,.recordBtn{
  width: 150px;
  height: 50px;
  background: url("../assets/img/get-btn.png") no-repeat;
  background-size: 100% auto;
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999;
  transform: scale(0);
  animation: shendan 1s forwards;
  animation-delay: 1s;
}
.recordBtn{
  background: url("../assets/img/back-btn.png") no-repeat;
  background-size: 100% auto;
}

/* 未中奖页面 */
.thanksWraper {
  background: rgb(225, 3, 26);
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

