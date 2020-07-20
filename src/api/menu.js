import http from './http'

const fetchMapper = () => http.get('/menu/mapper')

const fetchRoot = () => http.get('/menu/root')

const fetchChildren = parentId => http.get('/menu/children', { params: { parentId } })

export { fetchMapper, fetchRoot, fetchChildren }
