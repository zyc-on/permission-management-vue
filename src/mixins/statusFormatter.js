export const statusFormatter = {
  methods: {
    statusFormatter (row, column) {
      return row.status === 1 ? '有效' : '无效'
    }
  }
}
