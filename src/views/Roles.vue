<template>
  <div>
    <role-conditions />
    <role-table />
    <role-dialog />
    <role-permission-dialog />
  </div>
</template>

<script>
import RoleConditions from '../components/roles/RoleConditions.vue'
import RoleTable from '../components/roles/RoleTable.vue'
import RoleDialog from '../components/roles/RoleDialog.vue'
import RolePermissionDialog from '../components/roles/RolePermissionDialog.vue'
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
