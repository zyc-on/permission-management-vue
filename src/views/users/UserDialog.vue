<template>
  <el-dialog title="编辑用户" :visible.sync="dialogVisible">
    <el-form :model="tempItem">
      <el-form-item label="用户名" label-width="72px">
        <el-input v-model="tempItem.username"></el-input>
      </el-form-item>
      <el-form-item label="姓名" label-width="72px">
        <el-input v-model="tempItem.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="72px">
        <el-input v-model="tempItem.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" label-width="72px">
        <el-input v-model="tempItem.password2"></el-input>
      </el-form-item>
      <el-form-item label="性别" label-width="72px">
        <el-select v-model="tempItem.gender" placeholder="请选择性别">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系电话" label-width="72px">
        <el-input v-model="tempItem.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" label-width="72px">
        <el-input v-model="tempItem.email"></el-input>
      </el-form-item>
      <el-form-item label="状态" label-width="72px">
        <el-radio v-model="tempItem.status" :label="1">有效</el-radio>
        <el-radio v-model="tempItem.status" :label="0">无效</el-radio>
      </el-form-item>
      <el-form-item label="备注" label-width="72px">
        <el-input
          type="textarea"
          :rows="2"
          v-model="tempItem.description"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="createOrUpdateItem">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { createOrUpdateItem } from '../../mixins/createOrUpdateItem'
import { dialogVisible } from '../../mixins/dialogVisible'
export default {
  mixins: [createOrUpdateItem, dialogVisible],
  computed: {
    ...mapState('users', ['tempItem', 'prefix'])
  },
  methods: {
    ...mapActions('users', ['insertItem', 'updateItem'])
  }
}
</script>

<style></style>
