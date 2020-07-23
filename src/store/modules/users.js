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
      username: '',
      status: '',
      beginDate: '',
      endDate: ''
    },
    dialogVisible: false,
    userRoleDialogVisible: false,

    // 存储新增和修改对象的数据
    tempItem: {},

    // 确定请求地址的前缀 /user/*
    prefix: 'user',

    // 要设置角色的目标用户
    targetUser: {
      id: '',
      name: ''
    },

    // 多选选中的用户
    selectedItems: []
  },
  getters: {
    ...commonGetters
  },
  mutations: {
    ...commonMutations,
    closeUserRoleDialog (state) {
      state.userRoleDialogVisible = false
    },
    initializeUserRoleDialog (state, user) {
      state.targetUser.id = user.id
      state.targetUser.name = user.name
      state.userRoleDialogVisible = true
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
