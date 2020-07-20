<template>
  <div class="container">
    <el-form :inline="true" :model="formCondition" size="small">
      <el-form-item label="用户名">
        <el-input
          v-model="formCondition.username"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input
          v-model="formCondition.username"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formCondition.status" placeholder="选择状态">
          <el-option label="有效" value="1"></el-option>
          <el-option label="无效" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间 由">
        <el-date-picker
          v-model="formCondition.startTime"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="到">
        <el-date-picker
          v-model="formCondition.endTime"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-button size="mini">查询</el-button>
      <el-button size="mini" @click="userDialogVisible = true">新增</el-button>
      <el-button size="mini">删除</el-button>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column label="序号" width="50">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="80">
      </el-table-column>
      <el-table-column prop="realName" label="姓名" width="60">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="50"
        :formatter="formatGender"
      >
      </el-table-column>
      <el-table-column prop="tel" label="联系电话" width="136">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="136"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="updateTime" label="最后修改时间" width="180">
      </el-table-column>
      <el-table-column prop="status" :formatter="formatStatus" label="状态" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleUpdateUserDialog(scope.row.id)"
            >修改</el-button
          >
          <el-button
            size="mini"
            @click="deleteUser(scope.row.realName,scope.row.id)"
            >删除</el-button
          >
          <el-button size="mini" @click="toggleUserStatus(scope.row)">{{scope.row.status===1?'无效':'有效'}}</el-button>
          <el-button size="mini">设置角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryParams.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="queryParams.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <el-dialog :title="dialogTitle" :visible.sync="userDialogVisible">
      <el-form :model="user">
        <el-form-item label="用户名" label-width="72px">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="姓名" label-width="72px">
          <el-input v-model="user.realName"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="72px">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" label-width="72px">
          <el-input v-model="password2"></el-input>
        </el-form-item>
        <el-form-item label="性别" label-width="72px">
          <el-select v-model="user.gender" placeholder="请选择性别">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系电话" label-width="72px">
          <el-input v-model="user.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="72px">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="状态" label-width="72px">
          <el-radio v-model="user.status" :label="1">有效</el-radio>
          <el-radio v-model="user.status" :label="0">无效</el-radio>
        </el-form-item>
        <el-form-item label="备注" label-width="72px">
          <el-input
            type="textarea"
            :rows="2"
            v-model="user.description"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetDialog">取 消</el-button>
        <el-button type="primary" @click="handleUserDialogConfirm"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUserById
} from '../api/user'
export default {
  data () {
    return {
      total: 0,
      tableData: [],
      multipleSelection: [],
      queryParams: {
        page: 1,
        limit: 10
      },
      formCondition: {
        username: '',
        realName: '',
        status: '',
        startTime: '',
        endTime: ''
      },
      user: {},
      // user1: {
      //   username: '',
      //   password: '',
      //   realName: '',
      //   gender: '',
      //   tel: '',
      //   email: '',
      //   status
      // },
      dialogTitle: '创建用户',
      userDialogVisible: false,
      password2: ''
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    async fetchUsers () {
      const res = await getUsers(this.queryParams)
      console.log(res.data.data)
      this.tableData = res.data.data
      this.total = res.data.total
    },
    formatGender (row, column) {
      return row.gender === 1 ? '男' : row.gender === 0 ? '女' : '未知'
    },
    formatStatus (row, column) {
      return row.status === 1 ? '有效' : '无效'
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.fetchUsers()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.fetchUsers()
    },
    resetDialog () {
      this.user = {}
      this.password2 = ''
      this.dialogTitle = '创建用户'
      this.userDialogVisible = false
    },
    async handleUserDialogConfirm () {
      if (!this.user.id) {
        await createUser(this.user)
        this.userDialogVisible = false
        this.user = {}
        await this.fetchUsers()
        return
      }
      await updateUser(this.user)
      this.userDialogVisible = false
      await this.fetchUsers()
      this.dialogTitle = '创建用户'
      this.user = {}
    },
    async handleUpdateUserDialog (id) {
      this.dialogTitle = '编辑用户'
      const res = await getUserById(id)
      this.user = res.data.data
      console.log(res.data)
      console.log(this.user)

      this.userDialogVisible = true
    },
    deleteUser (name, id) {
      this.$confirm(`此操作将永久删除用户：${name}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await deleteUserById(id)
          this.$message({
            type: 'success',
            message: `用户${name}删除成功!`
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消操作'
          })
        })
    },
    async toggleUserStatus (user) {
      user.status = user.status === 1 ? 0 : 1
      await updateUser(user)
      await this.fetchUsers()
    }
  }
}
</script>

<style></style>
