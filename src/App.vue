<template>
  <el-container class="app">
    <el-header class="header">黑土音乐</el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu default-active="$route.path" class="el-menu-vertical-demo list" :router="true">
          <el-menu-item index="/">
            <i class="el-icon-search"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>
          <el-menu-item index="/newMusic">
            <i class="el-icon-tickets"></i>
            <span slot="title">最新音乐</span>
          </el-menu-item>
          <el-menu-item index="/newMv">
            <i class="el-icon-video-camera"></i>
            <span slot="title">最新MV</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import axios from "axios";
export default {
  components: {
    // HelloWorld,
  },
  data() {
    return {
      // banners: [],
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
.app {
  height: 100%;
}
.header {
  line-height: 60px;
  text-align: center;
  font-size: 28px;
  color: rgb(19, 13, 13);
  background-color: #ededed;
}
.aside .list {
  height: 100%;
  /* background-color: #0f0; */
}
/* .main {
  background-color: #00f;
} */
</style>
