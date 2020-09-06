<template>
  <div class="app">
    <h3 class="title">{{musicName}}</h3>
    <div class="singer">歌手: {{singer}}</div>
    <div class="album">专辑: {{album}}</div>
    <img :src="picUrl" alt class="pic" />
    <audio :src="musicUrl" controls autoplay></audio>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    if (this.$route.query.id == "") {
      return;
    }
    axios({
      url: "https://autumnfish.cn/song/url?id=" + this.$route.query.id,
    }).then((ret) => {
      this.musicUrl = ret.data.data[0].url;
    });
    axios({
      url: "https://autumnfish.cn/song/detail?ids=" + this.$route.query.id,
    }).then((ret) => {
      this.musicName = ret.data.songs[0].name;
      this.album = ret.data.songs[0].al.name;
      this.picUrl = ret.data.songs[0].al.picUrl;
      this.singer = ret.data.songs[0].ar
        .map((item) => {
          return item.name;
        })
        .join(" / ");
      //   console.log(this.singer);
    });
  },
  data() {
    return {
      musicUrl: "",
      picUrl: "",
      singer: "",
      musicName: "",
      album: "",
    };
  },
};
</script>
<style scoped>
.app {
  width: 600px;
  margin: 0 auto;
  text-align: center;
}
.singer {
  margin: 10px 0;
}
.pic {
  width: 100%;
  margin: 10px 0;
}
audio {
  width: 100%;
}
</style>