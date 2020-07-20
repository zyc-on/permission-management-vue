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
        prop="parentId"
        label="上级菜单"
        width="90"
        align="center"
        :formatter="parentFormatter"
      >
      </el-table-column>
      <el-table-column prop="type" label="菜单类型" width="90" align="center">
      </el-table-column>
      <el-table-column
        prop="identification"
        label="菜单标识"
        width="90"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="icon" label="图标" width="136" align="center">
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
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="initializeCreateDialog">新增</el-button>
          <el-button size="mini" @click="initializeUpdateDialog(scope.row.id)">修改</el-button>
          <el-button
            size="mini"
            @click="deleteItem(scope.row.name, scope.row.id)"
            >删除</el-button
          >
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
import { tableHandler } from '../../mixins/tableHandler'
import { deleteItem } from '../../mixins/deleteItem'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  mixins: [tableHandler, deleteItem],
  created () {
    this.getTableData()
  },
  computed: {
    ...mapState('menus', ['tableData', 'total', 'queryParams', 'prefix']),
    ...mapGetters('menus', ['mapIdToName'])
  },
  methods: {
    ...mapMutations('menus', ['initializeCreateDialog']),
    ...mapActions('menus', ['getTableData', 'deleteItemById', 'initializeUpdateDialog']),
    parentFormatter (row, cloumn) {
      return this.mapIdToName(row.id)
    }
  }
}
</script>

<style></style>
