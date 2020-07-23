import http from './http'

const setRolePermission = (roleId, permissionIds) => http.put(`/role/${roleId}/permissions`, permissionIds)
const fetchRolePermission = roleId => http.get(`/role/${roleId}/permissions`)

export {
  setRolePermission,
  fetchRolePermission
}
