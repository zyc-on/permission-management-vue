<template>
  <div class="app-container">
    <div class="app-aside">
      <el-menu
        class="aside-menu"
        unique-opened
        router
        :collapse="fold"
        :default-openeds="['2']"
      >
        <el-menu-item index="home">
          <i class="el-icon-house"></i><span slot="title">主页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i><span>系统管理</span>
          </template>
          <el-menu-item index="users">用户管理</el-menu-item>
          <el-menu-item index="roles">角色管理</el-menu-item>
          <el-menu-item index="menus">菜单管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="inner-container">
      <app-header @toggleMenu="fold = !fold" :fold="fold" />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '../layout/AppHeader'
export default {
  components: {
    AppHeader
  },
  data () {
    return {
      fold: false
    }
  }
}
</script>

<style lang="scss">
.app-container {
  display: flex;

  .inner-container {
    flex-grow: 1;
  }
}

.aside-menu:not(.el-menu--collapse) {
  width: 180px;
  height: 100vh;
}
</style>
