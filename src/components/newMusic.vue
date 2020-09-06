<template>
  <div class="app">
    <div class="searchBar">
      <input type="text" placeholder="请输入您要搜索的歌曲" v-model="inputValue" @keyup.enter="search" />
      <i class="el-icon-search btn" @click="search"></i>
    </div>
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
      url: "https://autumnfish.cn/personalized/newsong?" + Math.random() * 9999,
    }).then((ret) => {
      console.log(ret);
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
      inputValue: "",
    };
  },
  methods: {
    search() {
      if (this.inputValue.trim() == "") {
        return;
      }
      axios({
        url: "https://autumnfish.cn/search?keywords=?" + this.inputValue,
      }).then((ret) => {
        // ret.data.result.song = ret.data.result.songs;
        console.log(ret);
        ret.data.result.songs.forEach((item) => {
          item.song = {};
          item.song.album = item.album;
          item.song.artists = item.artists.map((item) => {
            return item.name;
          });
          item.song.duration = item.duration;
        });
        this.$refs.musicList.musicList = ret.data.result.songs;
        console.log(ret.data.result.songs);
      });
    },
  },
};
</script>
<style scoped>
.app {
  width: 100%;
}
.searchBar {
  margin: 0 auto 20px;
  width: 300px;
  height: 35px;
  position: relative;
  display: flex;
  /* justify-content: center; */
}
.btn {
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
}
input {
  width: 100%;
  height: 100%;
  outline: none;
  text-indent: 8px;
}
</style>
