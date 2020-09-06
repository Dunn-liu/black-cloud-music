<template>
  <div>
    <h3>{{name}}</h3>
    <video :src="mvUrl" controls autoplay></video>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    axios({
      url: "https://autumnfish.cn/mv/url?id=" + this.$route.query.id,
    }).then((ret) => {
      this.name = this.$route.query.name;
      this.mvUrl = ret.data.data.url;
    });
  },
  data() {
    return {
      name: "",
      mvUrl: "",
    };
  },
};
</script>
<style scoped>
.app {
  width: 600px;
  margin: 0 auto;
}
h3 {
  margin: 20px 0;
  text-align: center;
}
video {
  display: block;
  width: 80%;
  margin: 0 auto;
}
</style>