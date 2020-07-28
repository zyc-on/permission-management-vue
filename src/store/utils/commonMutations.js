export default {
  setTableData (state, tableData) {
    state.tableData = tableData
  },
  setTotal (state, total) {
    state.total = total
  },
  closeDialog (state) {
    state.dialogVisible = false
    state.tempItem = {}
  },

  setPage (state, page) {
    state.queryParams.page = page
  },
  setLimit (state, limit) {
    state.queryParams.limit = limit
  },
  setQueryParams (state, params) {
    state.queryParams = params
  },
  initializeCreateDialog (state, row) {
    state.tempItem = {}

    // 新增权限的父级信息(临时)
    if (row) {
      state.tempItem.parentId = row.id
      state.tempItem.type = row.type + 1
    }

    state.dialogVisible = true
  },
  setUpdateItem (state, tempItem) {
    state.dialogVisible = true
    state.tempItem = tempItem
  },
  setSelectedItems (state, items) {
    state.selectedItems = items
  }
}
