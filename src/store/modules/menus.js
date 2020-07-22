
import commonMutations from '../utils/commonMutations'
import commomActions from '../utils/commonActions'

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
    prefix: 'menu'
  },
  mutations: {
    ...commonMutations
  },
  actions: {
    ...commomActions
  }
}
