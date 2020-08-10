import http from './http'

const fetchUserRoles = (userId) => http.get(`/user/${userId}/roles`)

const setUserRoles = (userId, roleIds) => http.put(`/user/${userId}/roles`, roleIds)

const login = (user) => http.post(`/login?username=${user.username}&password=${user.password}`)

export {
  fetchUserRoles,
  setUserRoles,
  login
}
