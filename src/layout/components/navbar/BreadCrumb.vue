<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item) in levelList" :key="item.path" :to="item.path">
        {{item.meta.title||233}}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>

export default {
  data () {
    return {
      levelList: []
    }
  },
  watch: {
    $route (route) {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    isHome (route) {
      // return route.name.toLowerCase() === 'home'
      return true
    },
    getBreadcrumb () {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      )
      const first = matched[0]

      if (!this.isHome(first)) {
        matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched)
      }

      this.levelList = matched
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
