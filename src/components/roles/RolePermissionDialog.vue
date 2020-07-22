<template>
  <el-dialog
    title="设置角色权限"
    :visible.sync="rolePermissionDialogVisible"
    @open="onDialogOpen"
  >
    <span>角色名称：{{ targetRole.name }}</span>
    <el-divider content-position="left">Lazy Tree</el-divider>
    <el-tree
      :props="lazyTreeProps"
      :load="loadNode"
      node-key="id"
      ref="lazyTree"
      lazy
      show-checkbox
    />
    <el-divider content-position="left">Tree</el-divider>
    <el-tree
      :data="treeData"
      :props="treeProps"
      node-key="id"
      ref="tree"
      show-checkbox
    />
    <div class="button-wrapper">
      <el-button type="primary" @click="submit">确定</el-button>
      <el-button type="info" @click="rolePermissionDialogVisible = false"
        >取消</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
import { fetchRoot, fetchChildren, fetchPermissionTree } from '../../api/menu'
import { setRolePermission, fetchRolePermission } from '../../api/role'
// import { resolveTreeData } from '../../store/utils/resolveTreeData'
export default {
  data () {
    return {
      lazyTreeProps: {
        label: 'name',
        children: 'children',
        isLeaf: 'isLeaf'
      },
      treeProps: {
        label: 'name',
        children: 'children'
      },
      treeData: []
    }
  },
  computed: {
    ...mapState('roles', ['targetRole']),
    rolePermissionDialogVisible: {
      get () {
        return this.$store.state.roles.rolePermissionDialogVisible
      },
      set () {
        this.$store.commit('roles/closeRolePermissionDialog')
      }
    }
  },
  created () {
    this.getTreeData()
  },
  methods: {
    async onDialogOpen () {
      await this.initializeTreeCheckedKeys()
    },

    // 初始化角色已有权限
    async initializeTreeCheckedKeys () {
      const {
        data: { data }
      } = await fetchRolePermission(this.targetRole.id)
      this.$refs.tree.setCheckedKeys(data)
      this.$refs.lazyTree.setCheckedKeys(data)
    },

    async getTreeData () {
      const { data: { data } } = await fetchPermissionTree()
      this.treeData = data
    },

    // 懒加载树状结构数据
    async loadNode (node, resolve) {
      if (node.level === 0) {
        const {
          data: { data }
        } = await fetchRoot()
        resolve(data)
      }
      if (node.level === 1) {
        const {
          data: { data }
        } = await fetchChildren(node.data.id)
        resolve(data)
      }
      if (node.level === 2) {
        const {
          data: { data }
        } = await fetchChildren(node.data.id)
        data.forEach(item => {
          item.isLeaf = true
        })
        resolve(data)
      }
    },
    async submit () {
      await setRolePermission(
        this.targetRole.id,
        this.$refs.tree.getCheckedKeys()
      )
      this.rolePermissionDialogVisible = false
    }
  }
}
</script>

<style lang="scss">
.button-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
