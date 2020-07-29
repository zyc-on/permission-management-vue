<template>
  <div class="icon-body">
    <el-input
      v-model="name"
      style="position: relative;"
      clearable
      placeholder="请输入图标名称"
    >
      <i slot="suffix" class="el-icon-search el-input__icon" />
    </el-input>
    <div class="icon-list">
      <div
        v-for="(item, index) in filteredIcons"
        :key="index"
        @click="selectedIcon(item)"
      >
        <i :class="item" />
        <span>{{ item.split('el-icon-')[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import icons from './icons'
export default {
  name: 'IconSelect',
  data () {
    return {
      name: '',
      iconList: icons
    }
  },
  computed: {
    filteredIcons: function () {
      if (this.name) {
        return this.iconList.filter(icon => icon.includes(this.name))
      }
      return this.iconList
    }
  },
  methods: {
    selectedIcon (name) {
      this.$emit('selected', name)
      document.body.click()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.icon-body {
  width: 100%;
  padding: 10px;
  .icon-list {
    height: 200px;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    div {
      height: 40px;
      margin-top: 10px;
      cursor: pointer;
      width: 25%;
      min-width: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;

      i {
        font-size: 23px;
      }

      span {
        line-height: 20px;
      }
    }
  }
}
</style>
