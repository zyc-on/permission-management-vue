export const deleteItem = {
  methods: {
    async deleteItem (name, id) {
      this.$confirm(`此操作将永久删除：${name}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.deleteItemById(id)
        })
        .catch(() => {
          this.$message.info('取消操作')
        })
    }
  }
}
