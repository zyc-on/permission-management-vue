import commonMutations from '../utils/commonMutations'
import commonActions from '../utils/commonActions'

export default {
  namespaced: true,
  state: {
    tableData: [],
    total: 0,
    queryParams: {
      page: 1,
      limit: 6,
      name: '',
      username: '',
      status: ''
    },
    dialogVisible: false,
    setRoleDialogVisible: false,
    tempItem: {},
    prefix: 'user'
  },
  mutations: {
    ...commonMutations
  },
  actions: {
    ...commonActions,
    async toggleUserStatus ({ state, dispatch }, user) {
      user.status = user.status === 1 ? 0 : 1
      await dispatch('updateItem', user)
      console.log('更新用户状态')
    }
  }
}
