export const dialogVisible = {
  computed: {
    dialogVisible: {
      get () {
        return this.$store.state[`${this.prefix}s`].dialogVisible
      },
      set () {
        this.$store.commit(`${this.prefix}s/closeDialog`)
      }
    }
  }
}
