<template>
  <div>
    <user-conditions />
    <user-table />
    <user-dialog />
    <user-role-dialog />
  </div>
</template>

<script>
import UserConditions from './UserConditions.vue'
import UserTable from './UserTable.vue'
import UserDialog from './UserDialog.vue'
import UserRoleDialog from './UserRoleDialog.vue'
export default {
  components: {
    UserConditions,
    UserTable,
    UserDialog,
    UserRoleDialog
  }
}
</script>

<style></style>
