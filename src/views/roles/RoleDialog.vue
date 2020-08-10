<template>
  <el-dialog title="编辑角色" :visible.sync="dialogVisible">
    <el-form :model="tempItem">
      <el-form-item label="角色编码" label-width="72px">
        <el-input v-model="tempItem.code"></el-input>
      </el-form-item>
      <el-form-item label="角色名称" label-width="72px">
        <el-input v-model="tempItem.name"></el-input>
      </el-form-item>

      <el-form-item label="生效日期">
        <el-date-picker
          v-model="tempItem.validDate"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="失效日期">
        <el-date-picker
          v-model="tempItem.expiredDate"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
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
export default {
  mixins: [createOrUpdateItem],

  computed: {
    ...mapState('roles', ['tempItem']),
    dialogVisible: {
      get () {
        return this.$store.state.roles.dialogVisible
      },
      set () {
        this.$store.commit('roles/closeDialog')
      }
    }
  },

  methods: {
    ...mapActions('roles', ['insertItem', 'updateItem'])
  }
}
</script>

<style></style>
