export const deleteItems = {
  methods: {
    async deleteItems (ids) {
      this.$confirm(
        `此操作将永久删除选中的 ${ids.length} 个条目, 是否继续?`,
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(async () => {
          await this.deleteItemsByIds(ids)
        })
        .catch(() => {
          this.$message.info('取消操作')
        })
    }
  }
}
