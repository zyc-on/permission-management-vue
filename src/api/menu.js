import http from './http'

const fetchPermissionTree = () => http.get('/menu/tree')

const fetchRoot = () => http.get('/menu/root')

const fetchChildren = parentId => http.get('/menu/children', { params: { parentId } })

const fetchAsideMenus = () => http.get('/menu/aside')

export { fetchPermissionTree, fetchRoot, fetchChildren, fetchAsideMenus }
