<template>
  <div class="textCard">
    <h1 class="text" >{{item.data.text}}<i class="el-icon-arrow-right"></i></h1>
  </div>
</template>

<script>
export default {
  name: "textCard",
  data:function(){
    return {
    //   text:this.$parent.$data.textCard
    }
  },
  props: ["item"]
};
</script>

<style lang="less" scoped>
.textCard {
  .text {
    border-top:1px solid #EEE;
    padding-top: 20px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
  }
}
</style>
