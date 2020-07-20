<template>
<el-form :inline="true" :model="menuConditions" size="small">
    <el-form-item label="菜单名称：">
      <el-input v-model="menuConditions.username"></el-input>
    </el-form-item>
    <el-form-item label="状态：">
      <el-select v-model="menuConditions.status" placeholder="全部">
        <el-option label="全部" value="2"></el-option>
        <el-option label="有效" value="1"></el-option>
        <el-option label="无效" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="菜单类型：">
      <el-select v-model="menuConditions.type" placeholder="全部">
        <el-option label="目录" value="0"></el-option>
        <el-option label="菜单" value="1"></el-option>
        <el-option label="功能" value="2"></el-option>
        <el-option label="全部" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-button size="mini" @click="queryMenus">查询</el-button>
    <el-button size="mini" @click="initializeCreateDialog">新增</el-button>
    <el-button size="mini">删除</el-button>
  </el-form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      menuConditions: {}
    }
  },
  methods: {
    ...mapMutations('menus', ['resetQueryParams', 'initializeCreateDialog']),
    queryMenus () {
      this.resetQueryParams()
    }
  }
}
</script>

<style></style>
