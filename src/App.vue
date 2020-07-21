<template>
  <div id="app">
    <PageHeader />
    <Main />

  </div>
</template>

<script>
import Main from './views/Main.vue'
import PageHeader from './views/PageHeader.vue'
export default {
  components: {
    Main,
    PageHeader
  }
}
</script>

<style lang="scss">
#app{
  height: 100vh;
}
</style>
