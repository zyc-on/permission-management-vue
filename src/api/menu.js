import http from './http'

const fetchAllPermissions = () => http.get('/menu/permissions')

const fetchRoot = () => http.get('/menu/root')

const fetchChildren = parentId => http.get('/menu/children', { params: { parentId } })

export { fetchAllPermissions, fetchRoot, fetchChildren }
