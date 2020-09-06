<template>
  <div class="app">
    <h3>最新MV</h3>
    <div class="searchBar">
      <input type="text" placeholder="请输入您要搜索的MV" v-model="inputValue" @keyup.enter="search" />
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
      url: "https://autumnfish.cn/mv/all?" + Math.random() * 999,
    }).then((ret) => {
      console.log(this.$refs.musicList.flag);
      ret.data.data.forEach((item) => {
        item.song = {
          artists: item.artists.map((item) => {
            return item.name;
          }),
          album: { name: item.artistName },
          duration: item.duration,
        };
        item.picUrl = item.cover;
      });
      this.$refs.musicList.musicList = ret.data.data;
    });
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>
<style></style>
