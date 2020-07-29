<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './views/Main.vue'
export default {
  components: {
    Main
  }
}
</script>

<style lang="scss">
#app{
  height: 100vh;
  width: 100vw;
  position: relative;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}
body .el-table th.gutter{
display: table-cell!important;
}
</style>
