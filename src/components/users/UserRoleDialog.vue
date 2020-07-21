<template>
  <el-dialog title="设置用户角色" :visible.sync="userRoleDialogVisible">
    Dialog
  </el-dialog>
</template>

<script>
export default {
  computed: {
    userRoleDialogVisible: {
      get () {
        return this.$store.state.users.userRoleDialogVisible
      },
      set () {
        this.$store.commit('users/closeUserRoleDialog')
      }
    }
  }
}
</script>

<style></style>
