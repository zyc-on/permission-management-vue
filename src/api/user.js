import http from './http'

const getUserByName = username => http.get(`/user/username/${username}`)

const getUserById = id => http.get(`/user/id/${id}`)

const getUsers = params => http.get('user/list', { params })

const createUser = user => http.post('user/create', user)

const updateUser = user => http.put(`/user/${user.id}`, user)

const deleteUserById = id => http.delete(`/user/${id}`)

export {
  getUserByName,
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUserById
}
