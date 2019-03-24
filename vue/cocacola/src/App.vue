<template>
  <div id="app">
    <router-view v-on:translateNum="setNum($event)"></router-view>
  </div>
</template>

<script>
export default {
   name:"app",
    data: function () {
    return {
      number: null
    }
  },
  components:{

  },
  methods: {
    //从抽奖信息页获取抽奖码
    setNum: function (v) {
      this.number = v
    }
  }
}
</script>

<style>

</style>
