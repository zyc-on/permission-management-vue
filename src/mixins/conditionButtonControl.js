export const conditionButtonControl = {
  data () {
    return {
      canCreate: false,
      canDelete: false
    }
  },

  created () {
    this.initializeConditionButton()
  },

  methods: {
    initializeConditionButton () {
      const permissions = JSON.parse(sessionStorage.getItem('permissions'))
      this.canCreate = permissions.some(p =>
        p.authority.includes(`${this.prefix === 'menu' ? 'permission' : this.prefix}:create`)
      )
      this.canDelete = permissions.some(p =>
        p.authority.includes(`${this.prefix === 'menu' ? 'permission' : this.prefix}:delete`)
      )
    }
  }
}
