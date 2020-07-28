import commonMutations from '../utils/commonMutations'
import commomActions from '../utils/commonActions'
import commonGetters from '../utils/commonGetters'
import { fetchPermissionTree } from '../../api/menu'

export default {
  namespaced: true,
  state: {
    tableData: [],
    total: 0,
    queryParams: {
      page: 1,
      limit: 10,
      name: '',
      type: '',
      status: ''
    },
    dialogVisible: false,
    tempItem: {},
    prefix: 'menu',

    // 多选选中的菜单
    selectedItems: [],

    treeTableData: []
  },
  getters: {
    ...commonGetters
  },
  mutations: {
    ...commonMutations,
    setTreeTableData (state, data) {
      state.treeTableData = data
    }
  },
  actions: {
    ...commomActions,
    async getTreeTableData ({ commit }) {
      const {
        data: { data }
      } = await fetchPermissionTree()
      commit('setTreeTableData', data)
    }
  }
}
