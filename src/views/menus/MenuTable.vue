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
      <el-table-column align="center" prop="name" label="菜单名称" width="90">
      </el-table-column>
      <el-table-column
        prop="parentName"
        label="上级菜单"
        width="90"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="type"
        :formatter="typeFormatter"
        label="菜单类型"
        width="90"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="identification"
        label="菜单标识"
        width="130"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="icon" label="图标" width="136" align="center">
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序号" width="70" align="center">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="70"
        align="center"
        :formatter="statusFormatter"
      >
      </el-table-column>
      <el-table-column prop="url" label="URL" width="100" align="center">
      </el-table-column>
      <el-table-column prop="component" label="组件" width="70" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button-group>
            <el-tooltip content="添加子级" v-if="canCreate">
              <el-button
                size="small"
                v-if="scope.row.type !== 2"
                @click="initializeCreateDialog(scope.row)"
                icon="el-icon-plus"
                type="primary"
              />
            </el-tooltip>

            <el-tooltip content="编辑" v-if="canEdit">
              <el-button
                size="small"
                @click="initializeUpdateDialog(scope.row.id)"
                icon="el-icon-edit"
                type="warning"
              />
            </el-tooltip>

            <el-tooltip content="删除" v-if="canDelete">
              <el-button
                size="small"
                @click="deleteItem(scope.row.name, scope.row.id)"
                icon="el-icon-delete"
                type="danger"
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
  mixins: [statusFormatter, paginationHandler, deleteItem, tableButtonControl],
  created () {
    this.getTableData()
  },
  computed: {
    ...mapState('menus', ['tableData', 'total', 'queryParams', 'prefix'])
  },
  methods: {
    ...mapMutations('menus', ['initializeCreateDialog', 'setSelectedItems']),
    ...mapActions('menus', [
      'getTableData',
      'deleteItemById',
      'initializeUpdateDialog'
    ]),
    typeFormatter (row) {
      return ['目录', '菜单', '功能'].find((e, index) => index === row.type)
    },
    handleSelectionChange (val) {
      this.setSelectedItems(val)
    }
  }
}
</script>

<style></style>
