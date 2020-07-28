<template>
  <div>
    <permission-tree-table />
    <menu-dialog />
  </div>
</template>

<script>
import MenuDialog from '@/components/menus2/MenuDialog.vue'
import PermissionTreeTable from '@/components/menus2/PermissionTreeTable.vue'
export default {
  components: {
    MenuDialog,
    PermissionTreeTable
  }
}
</script>

<style>

</style>
