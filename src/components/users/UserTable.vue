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
      <el-table-column prop="name" label="姓名" width="60"> </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="50"
        :formatter="genderFormatter"
      >
      </el-table-column>
      <el-table-column prop="tel" label="联系电话" width="150">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="150"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="updateTime" label="最后修改时间" width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        :formatter="statusFormatter"
        label="状态"
        width="80"
      >
      </el-table-column>
      <el-table-column align="center" fixed="right" width="220" label="操作">
        <template slot-scope="scope" class="test">
          <div>
            <el-button-group>
              <el-tooltip content="设置角色">
                <el-button
                  size="small"
                  @click="initializeUserRoleDialog(scope.row)"
                  icon="el-icon-user"
                  type="primary"
              /></el-tooltip>

              <el-tooltip content="切换状态">
                <el-button
                  size="small"
                  @click="toggleUserStatus(scope.row)"
                  icon="el-icon-refresh"
                  type="info"
              /></el-tooltip>

              <el-tooltip content="编辑用户">
                <el-button
                  size="small"
                  @click="initializeUpdateDialog(scope.row.id)"
                  icon="el-icon-edit"
                  type="warning"
              /></el-tooltip>

              <el-tooltip content="删除用户">
                <el-button
                  size="small"
                  @click="deleteItem(scope.row.name, scope.row.id)"
                  icon="el-icon-delete"
                  type="danger"
              /></el-tooltip>
            </el-button-group>
          </div>
          <el-button-group> </el-button-group>
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
import { statusFormatter } from '../../mixins/statusFormatter'
import { paginationHandler } from '../../mixins/paginationHandler'

export default {
  mixins: [statusFormatter, deleteItem, createOrUpdateItem, paginationHandler],
  created () {
    this.getTableData()
  },
  computed: {
    ...mapState('users', ['tableData', 'total', 'queryParams', 'prefix'])
  },

  methods: {
    ...mapMutations('users', [
      'initializeCreateDialog',
      'initializeUserRoleDialog',
      'setSelectedItems'
    ]),
    ...mapActions('users', [
      'getTableData',
      'deleteItemById',
      'initializeUpdateDialog',
      'toggleUserStatus'
    ]),
    genderFormatter (row, column) {
      return row.gender === 1 ? '男' : row.gender === 0 ? '女' : '未知'
    },
    handleSelectionChange (val) {
      this.setSelectedItems(val)
    }
  }
}
</script>

<style lang="scss">
.el-table__fixed,
.el-table__fixed-right {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.12);
}

tr td:last-child div {
  display: flex;
  align-items: center;
}

// div.cell .el-button + .el-button {
//   margin-left: 7px;
// }
</style>
