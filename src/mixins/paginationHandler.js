export const paginationHandler = {
  methods: {
    async handleSizeChange (size) {
      this.$store.commit(`${this.prefix}s/setLimit`, size)
      await this.$store.dispatch(`${this.prefix}s/getTableData`)
    },
    async handleCurrentChange (current) {
      this.$store.commit(`${this.prefix}s/setPage`, current)
      await this.$store.dispatch(`${this.prefix}s/getTableData`)
    }
  }
}
