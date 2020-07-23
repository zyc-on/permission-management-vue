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
    <el-button size="mini" @click="submitQuery">查询</el-button>
    <el-button size="mini" @click="initializeCreateDialog">新增</el-button>
    <el-button size="mini" @click="submitDelete">删除</el-button>
  </el-form>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { deleteItems } from '../../mixins/deleteItems'
export default {
  mixins: [deleteItems],
  computed: {
    ...mapState('roles', ['queryParams']),
    ...mapGetters('roles', ['selectedIds'])
  },
  methods: {
    ...mapActions('roles', ['getTableData', 'deleteItemsByIds']),
    ...mapMutations('roles', ['setQueryParams', 'initializeCreateDialog']),
    async submitQuery () {
      this.setQueryParams(this.queryParams)
      await this.getTableData()
    },
    async submitDelete () {
      await this.deleteItems(this.selectedIds)
    }
  }
}
</script>

<style></style>
