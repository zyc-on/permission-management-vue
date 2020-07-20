<template>
  <div>
    <role-conditions />
    <role-table />
    <role-dialog />
    <set-permission-dialog />
  </div>
</template>

<script>
import RoleConditions from '../components/roles/RoleConditions.vue'
import RoleTable from '../components/roles/RoleTable.vue'
import RoleDialog from '../components/roles/RoleDialog.vue'
import SetPermissionDialog from '../components/roles/SetPermissionDialog.vue'
export default {
  components: {
    RoleConditions,
    RoleTable,
    RoleDialog,
    SetPermissionDialog
  }
}
</script>

<style></style>
