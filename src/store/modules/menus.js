import { fetchAllPermissions } from '../../api/menu'

import commonMutations from '../utils/commonMutations'
import commomActions from '../utils/commonActions'

import { resolveTreeData } from '../utils/resolveTreeData'

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
    tempItem: {},
    prefix: 'menu',
    permissions: []
  },
  mutations: {
    ...commonMutations,
    setPermissions (state, permissions) {
      state.permissions = permissions
    }
  },
  actions: {
    ...commomActions,

    async getAllPermissions ({ commit }) {
      const res = await fetchAllPermissions()
      commit('setPermissions', res.data.data)
    }
  },
  getters: {
    mapParentName: state => parentId => {
      const item = state.tableData.find(e => e.id === parentId)
      return item && item.name ? item.name : '无'
    },
    treeData: state => {
      return resolveTreeData(state.permissions)
    }
  }
}
