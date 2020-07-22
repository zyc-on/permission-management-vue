import commonMutations from '../utils/commonMutations'
import commonActions from '../utils/commonActions'

export default {
  namespaced: true,
  state: {
    tableData: [],
    total: 0,
    queryParams: {
      page: 1,
      limit: 10,
      name: '',
      username: '',
      status: '',
      beginDate: '',
      endDate: ''
    },
    dialogVisible: false,
    userRoleDialogVisible: true,
    tempItem: {},
    prefix: 'user'
  },
  mutations: {
    ...commonMutations,
    closeUserRoleDialog (state) {
      state.userRoleDialogVisible = false
    }
  },
  actions: {
    ...commonActions,
    async toggleUserStatus ({ state, dispatch }, user) {
      user.status = user.status === 1 ? 0 : 1
      await dispatch('updateItem', user)
    }
  }
}
