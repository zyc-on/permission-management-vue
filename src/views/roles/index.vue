<template>
  <div>
    <role-conditions />
    <role-table />
    <role-dialog />
    <role-permission-dialog />
  </div>
</template>

<script>
import RoleConditions from './RoleConditions.vue'
import RoleTable from './RoleTable.vue'
import RoleDialog from './RoleDialog.vue'
import RolePermissionDialog from './RolePermissionDialog.vue'
export default {
  components: {
    RoleConditions,
    RoleTable,
    RoleDialog,
    RolePermissionDialog
  }
}
</script>

<style></style>
