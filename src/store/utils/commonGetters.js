export default {
  selectedIds: state => {
    return state.selectedItems.reduce((res, cur) => {
      res.push(cur.id)
      return res
    }, [])
  }
}
