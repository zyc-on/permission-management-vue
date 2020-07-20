import http from './http'

const createItem = (prefix, item) => http.post(`/${prefix}/create`, item)

const deleteItem = (prefix, id) => http.delete(`/${prefix}/${id}`)

const updateItem = (prefix, item) => http.put(`/${prefix}/${item.id}`, item)

const fetchTableData = (prefix, params) => http.get(`/${prefix}/list`, { params })

const fetchItemById = (prefix, id) => http.get(`/${prefix}/${id}`)

export {
  createItem,
  deleteItem,
  updateItem,
  fetchTableData,
  fetchItemById
}
