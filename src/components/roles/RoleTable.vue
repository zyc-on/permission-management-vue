<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      align="center"
    >
      <el-table-column
        align="center"
        type="selection"
        width="50"
      ></el-table-column>
      <el-table-column align="center" type="index" width="50" label="序号">
      </el-table-column>
      <el-table-column align="center" prop="code" label="角色编码" width="90">
      </el-table-column>

      <el-table-column prop="name" label="角色名称" width="100" align="center">
      </el-table-column>

      <el-table-column
        prop="validDate"
        label="生效日期"
        width="130"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="expiredDate"
        label="失效日期"
        width="130"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="status"
        label="状态"
        width="70"
        align="center"
        :formatter="statusFormatter"
      >
      </el-table-column>
      <el-table-column
        prop="description"
        label="备注"
        width="126"
        align="center"
      >
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="initializeUpdateDialog(scope.row.id)"
            >修改</el-button
          >
          <el-button
            size="mini"
            @click="deleteItem(scope.row.name, scope.row.id)"
            >删除</el-button
          >
          <el-button size="mini" @click="initializeRolePermissionDialog(scope.row)">设置角色权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryParams.page"
      :page-sizes="[6, 10, 15, 40]"
      :page-size="queryParams.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { statusFormatter } from '../../mixins/statusFormatter'
import { paginationHandler } from '../../mixins/paginationHandler'
import { deleteItem } from '../../mixins/deleteItem'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  mixins: [statusFormatter, deleteItem, paginationHandler],
  created () {
    this.getTableData()
  },
  computed: {
    ...mapState('roles', ['tableData', 'total', 'queryParams', 'prefix'])
  },
  methods: {
    ...mapMutations('roles', ['initializeCreateDialog', 'initializeRolePermissionDialog', 'setSelectedItems']),
    ...mapActions('roles', [
      'getTableData',
      'deleteItemById',
      'insertItem',
      'initializeUpdateDialog'
    ]),
    handleSelectionChange (val) {
      this.setSelectedItems(val)
    }
  }
}
</script>

<style></style>
