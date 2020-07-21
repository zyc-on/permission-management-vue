<template>
  <div>
    <user-conditions />
    <user-table />
    <user-dialog />
    <user-role-dialog />
  </div>
</template>

<script>
import UserConditions from '@/components/users/UserConditions.vue'
import UserTable from '@/components/users/UserTable.vue'
import UserDialog from '@/components/users/UserDialog.vue'
import UserRoleDialog from '@/components/users/UserRoleDialog.vue'
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
