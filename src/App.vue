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
}
body .el-table th.gutter{
display: table-cell!important;
}
</style>
