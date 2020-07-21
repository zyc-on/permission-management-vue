
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
    },
    async handleSizeChange (size) {
      console.log(this.prefix)
      this.$store.commit(`${this.prefix}s/setLimit`, size)

      await this.$store.dispatch(`${this.prefix}s/getTableData`)
    },
    async handleCurrentChange (current) {
      this.$store.commit(`${this.prefix}s/setPage`, current)
      await this.$store.dispatch(`${this.prefix}s/getTableData`)
    }
  }
}
