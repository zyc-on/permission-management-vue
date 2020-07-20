<template>
  <div>
    <user-conditions />
    <user-table />
    <user-dialog />
  </div>
</template>

<script>
import UserConditions from '@/components/users/UserConditions.vue'
import UserTable from '@/components/users/UserTable.vue'
import UserDialog from '@/components/users/UserDialog.vue'
export default {
  components: {
    UserConditions,
    UserTable,
    UserDialog
  }
}
</script>

<style></style>
