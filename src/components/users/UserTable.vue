<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column type="index" label="序号" width="50"> </el-table-column>
      <el-table-column prop="username" label="用户名" width="80">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="60">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="50"
        :formatter="genderFormatter"
      >
      </el-table-column>
      <el-table-column prop="tel" label="联系电话" width="136">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="136"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="updateTime" label="最后修改时间" width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        :formatter="statusFormatter"
        label="状态"
        width="120"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="initializeUpdateDialog(scope.row.id)"
            >修改</el-button
          >
          <el-button
            size="mini"
            @click="deleteItem(scope.row.realName, scope.row.id)"
            >删除</el-button
          >
          <el-button size="mini" @click="toggleUserStatus(scope.row)">{{
            scope.row.status === 1 ? '无效' : '有效'
          }}</el-button>
          <el-button size="mini" @click="initializeUserRoleDialog(scope.row)">设置角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryParams.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="queryParams.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import { deleteItem } from '../../mixins/deleteItem'
import { createOrUpdateItem } from '../../mixins/createOrUpdateItem'
import { tableHandler } from '../../mixins/tableHandler'
import { paginationHandler } from '../../mixins/paginationHandler'

export default {
  mixins: [tableHandler, deleteItem, createOrUpdateItem, paginationHandler],
  created () {
    this.getTableData()
  },
  computed: {
    ...mapState('users', ['tableData', 'total', 'queryParams', 'prefix'])
  },

  methods: {
    ...mapMutations('users', ['initializeCreateDialog', 'initializeUserRoleDialog']),
    ...mapActions('users', [
      'getTableData',
      'deleteItemById',
      'initializeUpdateDialog',
      'toggleUserStatus'
    ]),
    genderFormatter (row, column) {
      return row.gender === 1 ? '男' : row.gender === 0 ? '女' : '未知'
    }
  }
}
</script>

<style></style>
