<template>
  <el-dialog
    @open="getUserRoles"
    title="设置用户角色"
    :visible.sync="userRoleDialogVisible"
  >
    <div>
      <span>用户：</span><span>{{ targetUser.name }}</span>
    </div>
    <el-table
      ref="userRoleTable"
      :data="roles"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="50"
        align="center"
      ></el-table-column>
      <el-table-column type="index" label="序号" align="center" width="50">
      </el-table-column>
      <el-table-column prop="name" label="角色名称" width="100" align="center">
      </el-table-column>

      <el-table-column
        prop="validDate"
        label="生效日期"
        width="130"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="expiredDate"
        label="失效日期"
        width="130"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="status"
        label="状态"
        width="70"
        align="center"
        :formatter="statusFormatter"
      />
    </el-table>
    <div class="button-wrapper">
      <el-button type="primary" @click="updateUserRoles">确定</el-button>
      <el-button type="info" @click="userRoleDialogVisible = false"
        >取消</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { statusFormatter } from '../../mixins/statusFormatter'
import { mapState } from 'vuex'
import { fetchTableData } from '../../api/commonApi'
import { fetchUserRoles, setUserRoles } from '../../api/user'
export default {
  mixins: [statusFormatter],
  data () {
    return {
      roles: [],
      selectedRoles: []
    }
  },
  created () {
    this.getRoles()
  },

  computed: {
    ...mapState('users', ['targetUser']),

    selectedRoleIds: function () {
      return this.selectedRoles.reduce((res, cur) => {
        res.push(cur.id)
        return res
      }, [])
    },
    userRoleDialogVisible: {
      get () {
        return this.$store.state.users.userRoleDialogVisible
      },
      set () {
        this.$store.commit('users/closeUserRoleDialog')
        this.$refs.userRoleTable.clearSelection()
      }
    }
  },
  methods: {
    // 获取所有角色
    async getRoles () {
      const {
        data: { data }
      } = await fetchTableData('role')
      this.roles = data
    },
    async updateUserRoles () {
      await setUserRoles(this.targetUser.id, this.selectedRoleIds)
      this.userRoleDialogVisible = false
    },

    // async onDialogOpen() {
    //   await this.getUserRoles()
    //   await this.getUserRoles()
    // },

    // 获取用户已分配的角色并在表格中选中
    async getUserRoles () {
      const {
        data: { data: roleIds }
      } = await fetchUserRoles(this.targetUser.id)
      this.initializeSelectedRoles(roleIds)
    },

    // 初始化选中角色
    initializeSelectedRoles (roleIds) {
      roleIds.forEach(roleId => {
        const selected = this.roles.find(item => item.id === roleId)
        selected && this.$refs.userRoleTable.toggleRowSelection(selected, true)
      })
    },
    handleSelectionChange (val) {
      this.selectedRoles = val
    }
  }
}
</script>

<style></style>
