
export const tableHandler = {
  data () {
    return {
      multipleSelection: []
    }
  },
  methods: {
    statusFormatter (row) {
      return row.status === 1 ? '有效' : '无效'
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
