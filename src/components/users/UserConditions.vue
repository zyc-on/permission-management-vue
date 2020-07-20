<template>
  <el-form :inline="true" :model="queryParams" size="small">
    <el-form-item label="用户名">
      <el-input
        v-model="queryParams.username"
        placeholder="用户名"
      ></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input
        v-model="queryParams.name"
        placeholder="用户名"
      ></el-input>
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="queryParams.status" placeholder="全部">
        <el-option label="全部" value=""></el-option>
        <el-option label="有效" value="1"></el-option>
        <el-option label="无效" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="创建时间 由">
      <el-date-picker
        v-model="queryParams.beginDate"
        value-format="yyyy-MM-dd"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="到">
      <el-date-picker
        v-model="queryParams.endDate"
        value-format="yyyy-MM-dd"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
    </el-form-item>
    <el-button size="mini" @click="submit">查询</el-button>
    <el-button size="mini" @click="initializeCreateDialog">新增</el-button>
    <el-button size="mini">删除</el-button>
  </el-form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {

  computed: {
    ...mapState('users', ['queryParams'])
  },
  methods: {
    ...mapMutations('users', ['initializeCreateDialog', 'setQueryParams']),
    ...mapActions('users', ['getTableData']),
    async submit () {
      this.setQueryParams(this.queryParams)
      await this.getTableData()
    }
  }
}
</script>

<style></style>
