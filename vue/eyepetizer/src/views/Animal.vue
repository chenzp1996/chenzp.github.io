<template>
  <div class="animal">
    <div class="container" v-for="(item, index) in itemList" :key="index">
      <TextCard :item = item v-if="item.type==='textCard'" ></TextCard>
      <FollowCard :item = item v-else-if="item.type ==='followCard'"></FollowCard>
      <VideoSmallCard :item = item v-else-if="item.type ==='videoSmallCard'"></VideoSmallCard>
    </div>
  </div>
</template>

<script>
import TextCard from "../components/TextCard.vue";
import FollowCard from "../components/FollowCard.vue";
import VideoSmallCard from "../components/VideoSmallCard.vue";

export default {
  name: "animal",
  data: function() {
    return {
      itemList: undefined //全部数据
    };
  },
  components: {
    FollowCard,
    VideoSmallCard,
    TextCard
  },
  methods: {
    getData: function() {
      var advUrl = "./json/animal.json";
      axios
        .get(advUrl)
        .then(response => {
          // console.log(response.data.itemList);
          this.itemList = response.data.itemList;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
.container {
  // border-bottom: 1px solid #ccc;
  margin: 10px 0;
  padding: 0px 10px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>

