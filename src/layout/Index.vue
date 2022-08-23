<template>
  <!-- <div class="index">
    <Header class=""></Header>
    <SideBar></SideBar>
    <MainContent></MainContent>
  </div> -->
  <el-container class="layout">
    <el-aside width="auto"
              class="asside">
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header class=""></Header>
      </el-header>
      <el-main class="main">
        <MainContent></MainContent>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './header/Header.vue'
import SideBar from './menu/SideBar.vue'
import MainContent from './mainContent/MainContent.vue'
export default {
  name: "Index",
  setup () {
    return {};
  },
  components: { Header, SideBar, MainContent }
}
</script>

<style lang="scss">
/* * {
  margin: 0;
  padding: 0;
}

.index {
  height: 800px;
  width: 100%;
} */
.layout {
  height: 100%;

  .asside {
    // background-color: blueviolet;
    background-color: #304156;
  }

  .header {
    background-color: #009688;
    display: flex;
    align-items: center;
    height: 50px;
  }

  .main {
    padding-top: 1px;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}
</style>