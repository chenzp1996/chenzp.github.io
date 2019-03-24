<template>
  <div class="videoSmallCard">
    <video class="sVideo" controls>
        <source :src="item.data.playUrl" type="video/mp4">
    </video>
    <p class="title">{{item.data.title}}</p>
    <p class="description">{{item.data.author.name}}</p>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            
        }
    },
    name: "VideoSmallCard",
    props: ["item"]
    };
</script>

<style lang="less" scoped>
.videoSmallCard{
    .sVideo{
        width: 50%;
        border-radius: 5px;
        float: left;
    }

    .title{
        display: inline-block;
        font-weight: bold;
        font-size: 14px;
        color: RGB(71, 71, 71);
        // float: left;
        padding: 10px;
        width: 50%;
    }
    .description{
        display: inline-block;
        // float: left;
        font-size: 12px;
        color: RGB(153,153,153);
        padding: 15px;
        // margin: 10px;
        // margin-top: 25px;
    }
}


</style>
