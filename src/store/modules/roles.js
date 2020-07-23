import commonMutations from '../utils/commonMutations'
import commonActions from '../utils/commonActions'
import commonGetters from '../utils/commonGetters'

export default {
  namespaced: true,
  state: {
    tableData: [],
    total: 0,
    queryParams: {
      page: 1,
      limit: 10,
      name: '',
      status: ''
    },
    dialogVisible: false,
    rolePermissionDialogVisible: false,
    tempItem: {},
    prefix: 'role',
    targetRole: {
      id: '',
      name: ''
    },

    // 多选选中的角色
    selectedItems: []
  },
  getters: {
    ...commonGetters
  },
  mutations: {
    ...commonMutations,
    closeRolePermissionDialog (state) {
      state.rolePermissionDialogVisible = false
    },
    initializeRolePermissionDialog (state, row) {
      state.targetRole.id = row.id
      state.targetRole.name = row.name
      state.rolePermissionDialogVisible = true
    }
  },
  actions: {
    ...commonActions
  }
}
