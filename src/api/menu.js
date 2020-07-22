import http from './http'

const fetchPermissionTree = () => http.get('/menu/tree')

const fetchRoot = () => http.get('/menu/root')

const fetchChildren = parentId => http.get('/menu/children', { params: { parentId } })

export { fetchPermissionTree, fetchRoot, fetchChildren }
