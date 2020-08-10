<template>
  <div class="app-container">
    <div class="app-aside">
      <el-menu
        class="aside-menu"
        unique-opened
        router
        :collapse="fold"
        :default-openeds="['0']"
      >
        <el-menu-item index="home">
          <i class="el-icon-house" /><span slot="title">主页</span>
        </el-menu-item>

        <el-submenu
          v-for="(item, index) in asideMenus"
          :key="item.id"
          :index="index.toString()"
        >
          <template slot="title">
            <i :class="item.icon"></i><span>{{ item.name }}</span>
          </template>
            <el-menu-item
              v-for="sub in item.children"
              :key="sub.id"
              :index="sub.url"
            >

              <i :class="sub.icon" />
              <template slot="title">
                <span>{{ sub.name }}</span>
              </template>
            </el-menu-item>
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
      fold: false,
      allAsideMenus: ''
    }
  },
  created () {
    this.allAsideMenus = JSON.parse(sessionStorage.getItem('allAsideMenus'))
  },
  computed: {
    asideMenus: function () {
      const permissions = JSON.parse(sessionStorage.getItem('permissions'))
      let rootKeys = []
      let branchKeys = []
      // 'sys:user:delete' => [sys,user]
      permissions.forEach(p => {
        const [first, second] = p.authority.split(':')
        rootKeys.push(first)
        second && branchKeys.push(second)
      })

      // 去重
      rootKeys = new Set(rootKeys)
      branchKeys = new Set(branchKeys)
      rootKeys = [...rootKeys]
      branchKeys = [...branchKeys]

      let roots = this.allAsideMenus.filter(menu => menu.type === 0)
      roots = roots.filter(root =>
        rootKeys.some(key => (root.identification || '').includes(key))
      )

      let branches = this.allAsideMenus.filter(menu => menu.type === 1)
      branches = branches.filter(branch =>
        branchKeys.some(key => (branch.identification || '').includes(key))
      )

      roots.forEach(root => {
        root.children = branches.filter(branch => branch.parentId === root.id)
      })

      return roots
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
  width: 200px;
  height: 100vh;
}

.inner-container main {
  padding: 7px;
}
</style>
