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
      <el-table-column align="center" type="index" width="60" label="序号">
      </el-table-column>
      <el-table-column align="center" prop="code" label="角色编码" width="100">
      </el-table-column>

      <el-table-column prop="name" label="角色名称" width="136" align="center">
      </el-table-column>

      <el-table-column
        prop="validDate"
        label="生效日期"
        width="146"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="expiredDate"
        label="失效日期"
        width="146"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="status"
        label="状态"
        width="80"
        align="center"
        :formatter="statusFormatter"
      >
      </el-table-column>
      <el-table-column
        prop="description"
        label="备注"
        width="140"
        align="center"
      >
      </el-table-column>
      <el-table-column label="操作" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button-group>
            <el-tooltip content="设置权限" v-if="canSet">
              <el-button
                size="small"
                @click="initializeRolePermissionDialog(scope.row)"
                type="primary"
                icon="el-icon-key"
              />
            </el-tooltip>
            <el-tooltip content="编辑角色" v-if="canEdit">
              <el-button
                size="small"
                @click="initializeUpdateDialog(scope.row.id)"
                type="warning"
                icon="el-icon-edit"
            /></el-tooltip>

            <el-tooltip content="删除角色" v-if="canDelete">
              <el-button
                size="small"
                @click="deleteItem(scope.row.name, scope.row.id)"
                type="danger"
                icon="el-icon-delete"
              />
            </el-tooltip>
          </el-button-group>
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
import { tableButtonControl } from '../../mixins/tableButtonControl'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  mixins: [statusFormatter, deleteItem, paginationHandler, tableButtonControl],
  created () {
    this.getTableData()
  },
  computed: {
    ...mapState('roles', ['tableData', 'total', 'queryParams', 'prefix'])
  },
  methods: {
    ...mapMutations('roles', [
      'initializeCreateDialog',
      'initializeRolePermissionDialog',
      'setSelectedItems'
    ]),
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
