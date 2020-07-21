import http from './http'

const setRolePermission = (roleId, permissionIds) => http.put(`/role/${roleId}/permission`, permissionIds)
const fetchRolePermission = roleId => http.get(`/role/${roleId}/permission`)

export {
  setRolePermission,
  fetchRolePermission
}
