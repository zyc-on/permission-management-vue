export const createOrUpdateItem = {
  methods: {
    async createOrUpdateItem () {
      this.tempItem.id
        ? await this.updateItem(this.tempItem)
        : await this.insertItem(this.tempItem)

      this.dialogVisible = false
    }
  }
}
