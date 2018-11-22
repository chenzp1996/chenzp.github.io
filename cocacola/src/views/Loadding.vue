<template>
  <div class="loadding">
    <Header></Header>
    <div class="wraper">
        <img src="../assets/img/loading.jpg" alt="">
        <div class="shadow"></div>
    </div>
    <span class="loadingNum">{{val}}%</span>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "loadding",
  data: function() {
    return {
      val: 0,
      step:1,
    };
  },
  components: {
    Header
  },
  methods: {
    loaddingNum: function() {}
  },
  mounted() {
    // 初始化后加载进度，加载到100%自动跳转到活动首页
    let timer = setInterval(() => {
      this.val = this.val + this.step;
      if (this.val >= 100) {
        clearInterval(timer);
        this.$router.push({path:"/index"})
        return;
      }
    }, 50);
  }
};
</script>

<style scoped>
.wraper {
  overflow: hidden;
  position: relative;
  text-align: center;
  margin: 0 auto;
  background: rgb(244, 0, 8);
  padding: 30px 0;
}

img {
  width: 100%;
  height: 100%;
}

.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(244, 0, 8, 0.5);
  animation: move 2s alternate infinite;
}

@keyframes move {
  from {
    top: 0;
  }

  to {
    top: -500px;
  }
}
.loadingNum {
  display: inline-block;
  background: rgb(244, 0, 8);
  height: 80px;
  width: 100%;
  color: white;
  text-align: center;
}
</style>

