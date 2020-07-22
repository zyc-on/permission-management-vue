import { fetchTableData, deleteItem, createItem, fetchItemById, updateItem } from '../../api/commonApi'

export default {
  async getTableData ({ state, commit, dispatch }) {
    const res = await fetchTableData(state.prefix, state.queryParams)
    console.log(res.data)
    commit('setTableData', res.data.data)
    commit('setTotal', res.data.total)

    if (state.prefix === 'menu') {
      await dispatch('getAllPermissions')
    }
  },

  async deleteItemById ({ state, dispatch }, id) {
    await deleteItem(state.prefix, id)
    await dispatch('getTableData')
  },

  async initializeUpdateDialog ({ state, commit }, id) {
    const res = await fetchItemById(state.prefix, id)
    commit('setUpdateItem', res.data.data)
  },

  async insertItem ({ state, dispatch }, item) {
    await createItem(state.prefix, item)
    await dispatch('getTableData')
  },

  async updateItem ({ state, dispatch }, item) {
    await updateItem(state.prefix, item)
    await dispatch('getTableData')
  }

}
