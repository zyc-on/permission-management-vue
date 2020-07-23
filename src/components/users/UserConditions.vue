<template>
  <el-form :inline="true" :model="queryParams" size="small">
    <el-form-item label="用户名">
      <el-input v-model="queryParams.username" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="queryParams.name" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="queryParams.status" placeholder="全部">
        <el-option label="全部" value=""></el-option>
        <el-option label="有效" value="1"></el-option>
        <el-option label="无效" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-date-picker
        v-model="duration"
        type="daterange"
        value-format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
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
  data () {
    return {
      duration: ''
    }
  },
  computed: {
    ...mapState('users', ['queryParams']),
    ...mapGetters('users', ['selectedIds'])
  },
  methods: {
    ...mapMutations('users', ['initializeCreateDialog', 'setQueryParams']),
    ...mapActions('users', ['getTableData', 'deleteItemsByIds']),
    async submitQuery () {
      if (this.duration) {
        this.queryParams.beginDate = this.duration[0]
        this.queryParams.endDate = this.duration[1]
      } else {
        this.queryParams.beginDate = ''
        this.queryParams.endDate = ''
      }
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
