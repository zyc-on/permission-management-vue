import commonMutations from '../utils/commonMutations'
import commonActions from '../utils/commonActions'

export default {
  namespaced: true,
  state: {
    tableData: [],
    total: 0,
    queryParams: {
      page: 1,
      limit: 10
    },
    dialogVisible: false,
    setPermissionDialogVisible: false,
    tempItem: {},
    prefix: 'role',
    targetRole: {
      id: '',
      name: ''
    }
  },
  mutations: {
    ...commonMutations,
    closeSetPermissionDialog (state) {
      state.setPermissionDialogVisible = false
    },
    initializeSetPermissionDialog (state, row) {
      state.targetRole.id = row.id
      state.targetRole.name = row.name
      state.setPermissionDialogVisible = true
    }
  },
  actions: {
    ...commonActions
  }
}
