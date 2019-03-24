<template>
  <div class="detail">
    <ComDetail></ComDetail>
    <img v-if="prize === 1" class="p-one" src="../assets/img/p-one.png" alt="" >
    <img v-if="prize === 2" class="p-two" src="../assets/img/p-two.png" alt="">
    <img v-if="prize === 3" class="p-three" src="../assets/img/p-three.png" alt="">
    <p v-if="prize === 1" class="description">一等奖兑换方式一等奖兑换方式一等奖兑换方式一等奖兑换方式一等奖兑换方式一等奖兑换方式一等奖兑换方式一等奖兑换方式一等奖兑换方式一等奖兑换方式一等奖兑换方式一等奖兑换方式</p>
    <p v-if="prize === 2" class="description">二等奖兑换方式二等奖兑换方式二等奖兑换方式二等奖兑换方式二等奖兑换方式二等奖兑换方式二等奖兑换方式二等奖兑换方式二等奖兑换方式二等奖兑换方式二等奖兑换方式二等奖兑换方式</p>
    <p v-if="prize === 3" class="description">三等奖兑换方式三等奖兑换方式三等奖兑换方式三等奖兑换方式三等奖兑换方式三等奖兑换方式三等奖兑换方式三等奖兑换方式三等奖兑换方式三等奖兑换方式三等奖兑换方式三等奖兑换方式</p>
  </div>
</template>

<script>
import ComDetail from "../components/ComDetail.vue";

export default {
  name: "detail",
  data: function() {
      return{
        // prize:1
        prize:Number(this.$parent.$data.number)
      }
  },
  components: {
    ComDetail
  },
  methods: {

  }
};
</script>

<style scoped>
.p-one,.p-two,.p-three{
    width: 60%;
    position: absolute;
    top: 160px;
    left: 0;
    right: 0;
    margin: auto;
}
.description{
  width: 50%;
  height: 100px;
  position: absolute;
  left: 20px;
  bottom: 80px;
  /* border: 1px solid white; */
  font-size: 8px;
  color: white;
}
</style>

