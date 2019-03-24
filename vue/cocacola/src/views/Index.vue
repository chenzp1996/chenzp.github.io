<template>
  <div class="index">
    <Header></Header>
    <div class="wraper">
        <div class="add">广告</div>
        <div class="rule">
            <img src="../assets/img/prize-txt.jpg">
        </div>
        <div class="prize">
            <img class="win" src="../assets/img/win.png" alt="">
            <img class="p-11" src="../assets/img/p-11.png" alt="">
            <img class="p-22" src="../assets/img/p-22.png" alt="">
            <img class="p-33" src="../assets/img/p-33.png" alt="">
        </div>
        <div class="p-bottom">
            <router-link to="/form"><img class="enter" src="../assets/img/enter.png" alt=""></router-link>
            <img src="../assets/img/p-bottom.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "loadding",
  num: 0,
  props: ["num"],
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
  text-align: center;
  background: rgb(244, 0, 8);
  overflow: hidden;
}

.win {
  display: inline-block;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 20px;
}
.prize {
  position: relative;
  height: 300px;
  overflow: hidden;
}
.p-11 {
  position: absolute;
  width: 60%;
  animation: p11An 1.5s forwards linear;
  left: -500px;
}
@keyframes p11An {
  form {
    left: -500px;
  }
  to {
    left: 30%;
  }
}
.p-22 {
  position: absolute;
  width: 50%;
  animation: p22An 1s forwards linear;
  top: 45%;
  left: -500px;
}
@keyframes p22An {
  form {
    left: -500px;
  }
  to {
    left: 20px;
  }
}
.p-33 {
  position: absolute;
  width: 40%;
  animation: p33An 1s forwards linear;
  top: 55%;
  left: 53%;
}
@keyframes p33An {
  0%{transform: scale(0.8)}
  25%{transform: scale(1.5)}
  50%{transform: scale(0.8)}
  75%{transform: scale(1.2)}
  100%{transform: scale(1)}
}
.add {
  color: white;
  font-size: 10px;
  text-align: left;
}
.p-bottom {
  position: relative;
}

.enter {
  position: absolute;
  top: 0;
  right: 50px;
  width: 50px;
  animation: enterBtn .5s infinite alternate linear;
}
@keyframes enterBtn{
  from{
    transform: scale(1)
  }
  to{
    transform: scale(1.3)
  }
}
</style>

