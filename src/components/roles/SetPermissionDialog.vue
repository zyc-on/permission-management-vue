<template>
  <el-dialog title="设置角色权限" :visible.sync="setPermissionDialogVisible">
    <span>角色名称：{{ targetRole.name }}</span>
    <!-- <el-tree :data="treeData" show-checkbox node-key="id" default-expand-all /> -->
    <el-tree :props="props" :load="loadNode" node-key="id" ref="tree" lazy show-checkbox />
    <div class="button-wrapper">
      <el-button type="primary" @click="submit">确定</el-button>
      <el-button type="info" @click="setPermissionDialogVisible=false">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { fetchRoot, fetchChildren } from '../../api/menu'
import { setRolePermission } from '../../api/role'
export default {
  data () {
    return {
      props: {
        label: 'name',
        children: 'children',
        isLeaf: 'isLeaf'
      }
    }
  },
  // created () {
  //   this.setTreeData()
  // },
  beforeUpdate () {},
  updated () {},
  computed: {
    // ...mapState('menus', ['treeData']),
    ...mapState('roles', ['targetRole']),
    setPermissionDialogVisible: {
      get () {
        return this.$store.state.roles.setPermissionDialogVisible
      },
      set () {
        this.$store.commit('roles/closeSetPermissionDialog')
        this.$refs.tree.setCheckedKeys([])
      }
    }
  },
  methods: {
    ...mapMutations('menus', ['setTreeData']),
    async loadNode (node, resolve) {
      if (node.level === 0) {
        const { data: { data } } = await fetchRoot()
        resolve(data)
      }
      if (node.level === 1) {
        const { data: { data } } = await fetchChildren(node.data.id)
        resolve(data)
      }
      if (node.level === 2) {
        const { data: { data } } = await fetchChildren(node.data.id)
        data.forEach(item => { item.isLeaf = true })
        resolve(data)
      }
    },
    async submit () {
      console.log(this.$refs.tree.getCheckedKeys())
      await setRolePermission(this.targetRole.id, this.$refs.tree.getCheckedKeys())
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
