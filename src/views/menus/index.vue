<template>
  <div>
    <menu-conditions />
    <menu-table />
    <menu-dialog />
  </div>
</template>

<script>
import MenuConditions from './MenuConditions.vue'
import MenuTable from './MenuTable.vue'
import MenuDialog from './MenuDialog.vue'
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
