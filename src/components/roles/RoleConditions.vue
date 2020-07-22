<template>
  <el-form :inline="true" :model="queryParams" size="small">
    <el-form-item label="角色名称：">
      <el-input v-model="queryParams.name"></el-input>
    </el-form-item>
    <el-form-item label="状态：">
      <el-select v-model="queryParams.status" placeholder="全部">
        <el-option label="全部" value="2"></el-option>
        <el-option label="有效" value="1"></el-option>
        <el-option label="无效" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-button size="mini" @click="submit">查询</el-button>
    <el-button size="mini" @click="initializeCreateDialog">新增</el-button>
    <el-button size="mini">删除</el-button>
  </el-form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: mapState('roles', ['queryParams']),
  methods: {
    ...mapActions('roles', ['getTableData']),
    ...mapMutations('roles', ['setQueryParams', 'initializeCreateDialog']),
    async submit () {
      this.setQueryParams(this.queryParams)
      await this.getTableData()
    }
  }
}
</script>

<style></style>
