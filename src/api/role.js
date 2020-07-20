import http from './http'

const setRolePermission = (roleId, permissionIds) => http.put(`/role/${roleId}/permission`, permissionIds)

export {
  setRolePermission
}
