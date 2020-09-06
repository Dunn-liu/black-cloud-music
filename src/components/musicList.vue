<template>
  <table class="info" cellpadding="0" cellspacing="0">
    <thead>
      <tr style="text-align:left">
        <th style="padding-left:50px">音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item,index) in musicList"
        :key="index"
        onselectstart="return false;"
        @click="musicPlay(item.id)"
      >
        <td>
          <span class="index">{{index+1}}</span>
          <img :src="item.picUrl" alt v-if="flag" />
          {{item.name}}
        </td>
        <td>{{item.song.artists.join(' / ')}}</td>
        <td>{{item.song.album.name}}</td>
        <td>{{(('00000'+Math.floor(item.song.duration/1000/60)).slice(-2)+':'+(('00000'+Math.floor(item.song.duration/1000%60)).slice(-2)))}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      musicList: [],
      flag: true,
      //   musicInfo: [],
    };
  },
  methods: {
    musicPlay(id, type) {
      if (type == 3000) {
        return;
      }
      this.$router.push("musicPlay?id=" + id);
    },
  },
};
</script>
<style scoped>
.info {
  width: 100%;
  table-layout: fixed;
}
.info img {
  vertical-align: middle;
  width: 60px;
  margin: 0 10px;
}
th {
  padding: 0 10px;
}
tbody tr {
  cursor: pointer;
  margin: 10px 0;
}
tbody tr:hover {
  background-color: #ccc;
}
.info tr {
  height: 80px;
  line-height: 40px;
}
.info tr td:nth-child(1) {
  width: 30%;
}
.info tr td:nth-child(2) {
  width: 20%;
}
.info tr td:nth-child(3) {
  width: 30%;
}
.info tr td:nth-child(4) {
  width: 20%;
}
.info tr td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
}
.index {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>