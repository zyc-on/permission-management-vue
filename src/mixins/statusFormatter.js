export const statusFormatter = {
  methods: {
    statusFormatter (row) {
      return row.status === 1 ? '有效' : '无效'
    }
  }
}
