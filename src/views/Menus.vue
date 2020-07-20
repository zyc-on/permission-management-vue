<template>
  <div>
    <menu-conditions />
    <menu-table />
    <menu-dialog />
  </div>
</template>

<script>
import MenuConditions from '../components/menus/MenuConditions.vue'
import MenuTable from '../components/menus/MenuTable.vue'
import MenuDialog from '../components/menus/MenuDialog.vue'
export default {
  components: {
    MenuConditions,
    MenuTable,
    MenuDialog
  }
}
</script>

<style>

</style>
