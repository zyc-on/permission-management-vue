import { fetchMapper } from '../../api/menu'

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
    mapper: [],
    tempItem: {},
    prefix: 'menu',
    treeData: []
  },
  mutations: {
    ...commonMutations,
    setMapper (state, mapper) {
      state.mapper = mapper
    },
    setTreeData (state) {
      state.treeData = resolveTreeData(state.mapper)
    }
  },
  actions: {
    ...commomActions,

    async getMapper ({ commit }) {
      const res = await fetchMapper()
      commit('setMapper', res.data.data)
    }
  },
  getters: {
    mapIdToName: state => id => {
      const item = state.mapper.find(e => e.id === id)
      return item && item.name ? item.name : ''
    }
  }
}
