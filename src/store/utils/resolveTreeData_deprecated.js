export const resolveTreeData = data => {
  const root = data
    .filter(e => e.type === 0)
    .map(e => ({
      id: e.id,
      label: e.name,
      children: []
    }))
  const branches = data
    .filter(e => e.type === 1)
    .map(e => ({
      id: e.id,
      parentId: e.parentId,
      label: e.name,
      children: []
    }))
  const leaves = data
    .filter(e => e.type === 2)
    .map(e => ({
      id: e.id,
      parentId: e.parentId,
      label: e.name
    }))

  branches.forEach(branch => {
    const children = leaves.filter(leaf => leaf.parentId === branch.id)
    branch.children.push(...children)
  })

  root.forEach(e => {
    const children = branches.filter(branch => branch.parentId === e.id)
    e.children.push(...children)
  })

  return root
}
