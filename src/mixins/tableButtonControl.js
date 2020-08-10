export const tableButtonControl = {
  data () {
    return {
      canEdit: false,
      canCreate: false,
      canDelete: false,
      canSet: false
    }
  },
  created () {
    this.initializeTableButton()
  },

  methods: {

    // 命名未统一

    initializeTableButton () {
      const permissions = JSON.parse(sessionStorage.getItem('permissions'))
      this.canCreate = permissions.some(p =>
        p.authority.includes(`${this.prefix === 'menu' ? 'permission' : this.prefix}:create`)
      )
      this.canEdit = permissions.some(p =>
        p.authority.includes(`${this.prefix === 'menu' ? 'permission' : this.prefix}:update`)
      )
      this.canDelete = permissions.some(p =>
        p.authority.includes(`${this.prefix === 'menu' ? 'permission' : this.prefix}:delete`)
      )
      this.canSet = permissions.some(p =>
        p.authority.includes(`${this.prefix === 'menu' ? 'permission' : this.prefix}:set`)
      )
    }
  }
}
