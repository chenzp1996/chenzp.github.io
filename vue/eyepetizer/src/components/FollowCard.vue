<template>
    <div class="followCard">
      <video class="fVideo" controls>
        <source :src="item.data.content.data.playUrl" type="video/mp4">
      </video>
      <div class="header">
        <img class="tx" :src="item.data.content.data.author.icon">
        <div class="desc">
          <p class="title">{{item.data.content.data.title}}</p>
          <p class="description">{{item.data.header.description}}</p>
        </div>
        <i class="el-icon-share"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: "followCard",
  data:function(){
    return {
      text:this.$parent.$data.textCard
    }
  },
  props: ["item"]
};
</script>

<style lang="less" scoped>

  .followCard {
    overflow: hidden;
    margin: 10px 0;

    .fVideo{
      border-radius: 5px;
    }

    .header {
      margin-top: 5px;
      vertical-align: middle;

      &::after{
        content: "";
        display: block;
        clear: both;
      }
      
      .tx {
        width: 40px;
        border-radius: 50%;
        float: left;
      }

      .desc {
        float: left;
        margin-left: 15px;
        .title {
          font-size: 14px;
          font-weight: bold;
          color: RGB(71, 71, 71);
        }
        .description{
          font-size: 12px;
          color: RGB(153,153,153);
        }
      }
      .el-icon-share{
        display: inline-block;
        float: right;
        line-height: 35px;
      }
    }
  }

</style>
