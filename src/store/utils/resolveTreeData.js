export const resolveTreeData = data => {
  const roots = data.filter(e => e.type === 0)
  const branches = data.filter(e => e.type === 1)
  const leaves = data.filter(e => e.type === 2)

  // 可能存在未分配上级的权限
  // const unAssigned = [...leaves, ...branches].filter(
  //   item => item.parentId === null
  // )

  branches.forEach(branch => {
    branch.children = leaves.filter(leaf => leaf.parentId === branch.id)
  })

  roots.forEach(root => {
    root.children = branches.filter(branch => branch.parentId === root.id)
  })

  // roots.push(...unAssigned)

  return roots
}
