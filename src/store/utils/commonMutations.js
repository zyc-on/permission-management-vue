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
    state.queryParams.page = 1
    state.queryParams.limit = 10
  },
  initializeCreateDialog (state) {
    state.tempItem = {}
    state.dialogVisible = true
  },
  setUpdateItem (state, tempItem) {
    state.dialogVisible = true
    state.tempItem = tempItem
  }
}
