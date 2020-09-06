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
    // axios({
    //   url: "https://autumnfish.cn/banner?" + Math.random() * 9999,
    // }).then((ret) => {
    //   // console.log(ret);
    //   this.banners = ret.data.banners;
    // });
    axios({
      url: "https://autumnfish.cn/personalized/newsong?" + Math.random() * 9999,
    }).then((ret) => {
      ret.data.result.forEach((item) => {
        item.song.artists = item.song.artists.map((item) => {
          return item.name;
        });
      });
      this.$refs.musicList.musicList = ret.data.result;
      console.log(ret.data.result);
    });
  },
  data() {
    return {
      banners: [
        {
          imageUrl:
            "http://p1.music.126.net/W91VG_sqazRvWQals8NCJA==/109951165296401913.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/hJjkv6vyFCnSWptLtIVbCw==/109951165296403790.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/kulm-yDdl6g5YGfj6NXKlQ==/109951165297633707.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/sYoA0fB0QDYaBU2oRcgZMg==/109951165297397622.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/lrIXrzZy9NU_w1OUonk2IA==/109951165297669479.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/tm5vqyShskNIEbx4LOdSBA==/109951165297659382.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/gsyFV_AptSTtNZLTpKv-_w==/109951165297687636.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/wNCAh__ACmZAKjDY_TDlWQ==/109951165298241884.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/Br2QVaJeAamOWzZTEpXpzQ==/109951165297688226.jpg",
        },
        {
          imageUrl:
            "http://p1.music.126.net/RaVzxBGjFMpi2QEmd57u-g==/109951165297686426.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.banner {
  width: 100%;
}
</style>
