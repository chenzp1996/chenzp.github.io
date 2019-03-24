Maintain<template>
  <div class="noStart">
    <Header></Header>
     <div class="wraper">
        <img class="maintain" src="../assets/img/maintain.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "maintain",
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
    height: 100%;
    position: relative;
    background: white;
}
  
.maintain{
  margin-top: 50%;
}

</style>

