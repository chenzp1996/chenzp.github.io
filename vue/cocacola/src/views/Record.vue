<template>
  <div class="detail">
    <ComRecord></ComRecord>
    <img v-if="prize === 1" class="p-one" src="../assets/img/p-one.png" alt="" @click="detail">
    <img v-if="prize === 2" class="p-two" src="../assets/img/p-two.png" alt=""  @click="detail">
    <img v-if="prize === 3" class="p-three" src="../assets/img/p-three.png" alt=""  @click="detail">
  </div>
</template>

<script>
import ComRecord from "../components/ComRecord.vue";

export default {
  name: "record",
  data: function() {
      return{
        prize:Number(this.$parent.$data.number)
      }
  },
  components: {
    ComRecord
  },
  methods: {
    detail(){
      this.$router.push({path:"detail"})
    }
  }
};
</script>

<style scoped>
.p-one,.p-two,.p-three{
    width: 50%;
    position: absolute;
    top: 210px;
    left: 0;
    right: 0;
    margin: auto;
}
</style>

