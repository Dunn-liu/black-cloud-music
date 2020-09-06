<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img
          :src="item.imageUrl"
          alt
          class="banner"
          @click="musicPlay(item.targetId,item.targetType)"
        />
      </el-carousel-item>
    </el-carousel>
    <h3>推荐音乐</h3>
    <!-- 主体 -->
    <musicList ref="musicList"></musicList>
  </div>
</template>
<script>
import axios from "axios";
import musicList from "./musicList";
export default {
  components: {
    musicList,
  },
  created() {
    axios({
      url: "https://autumnfish.cn/banner?" + Math.random() * 9999,
    }).then((ret) => {
      // console.log(ret);
      this.banners = ret.data.banners;
    });
    axios({
      url: "https://autumnfish.cn/personalized/newsong?" + Math.random() * 9999,
    }).then((ret) => {
      this.$refs.musicList.musicList = ret.data.result;
      ret.data.result.forEach((item) => {
        item.song.artists = item.song.artists.map((item) => {
          return item.name;
        });
      });
    });
  },
  data() {
    return {
      banners: [],
    };
  },
};
</script>
<style scoped>
.banner {
  width: 100%;
}
</style>
