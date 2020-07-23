import http from './http'

const fetchUserRoles = (userId) => http.get(`/user/${userId}/roles`)

const setUserRoles = (userId, roleIds) => http.put(`/user/${userId}/roles`, roleIds)

export {
  fetchUserRoles,
  setUserRoles
}
