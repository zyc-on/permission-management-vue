<template>
  <el-table :data="treeTableData" row-key="id" border default-expand-all>
    <el-table-column
      align="center"
      type="selection"
      width="50"
      ref="treeTable"
    ></el-table-column>
    <el-table-column align="center" prop="name" label="菜单名称" width="200">
      <template slot-scope="scope">
        <i
          :class="[
            scope.row.type === 2 ? 'el-icon-tickets' : 'el-icon-folder-opened',
          ]"
        ></i>
        <span class="name">{{ scope.row.name }}</span>
      </template>
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
    <el-table-column prop="status" label="状态" width="70" align="center">
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button @click="initializeCreateDialog(scope.row)" v-if="scope.row.type!==2" icon="el-icon-plus" plain size="small" type="primary">添加下级</el-button>
        <el-button @click="initializeUpdateDialog(scope.row.id)" icon="el-icon-edit" plain size="small" type="warning">编辑</el-button>
        <el-button icon="el-icon-delete" plain size="small" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchPermissionTree } from '../../api/menu'
import { resolveTreeData } from '../../store/utils/resolveTreeData'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
    this.getTreeTableData()
  },
  computed: {
    ...mapState('menus', ['treeTableData'])
  },
  methods: {
    ...mapMutations('menus', ['initializeCreateDialog']),
    ...mapActions('menus', ['getTreeTableData', 'initializeUpdateDialog']),
    async getTableData () {
      const {
        data: { data }
      } = await fetchPermissionTree()
      this.tableData = resolveTreeData(data)
    },
    handleSelectionChange (val) {
      console.log(val)
      this.checked = val
    },
    submit () {
      console.log(this.$refs.treeTable.$parent.selection)
    }
  }
}
</script>

<style lang="scss" scoped>
span.name{
  margin-left: 5px;
}
</style>
