export const resolveTreeData = data => {
  const roots = data.filter(e => e.type === 0)
  const branches = data.filter(e => e.type === 1)
  const leaves = data.filter(e => e.type === 2)

  branches.forEach(branch => {
    branch.children = leaves.filter(leaf => leaf.parentId === branch.id)
  })

  roots.forEach(root => {
    root.children = branches.filter(branch => branch.parentId === root.id)
  })

  return roots
}
