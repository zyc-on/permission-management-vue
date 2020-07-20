<template>
  <el-dialog title="编辑菜单" :visible.sync="dialogVisible">
    <el-form :model="tempItem">
      <el-form-item label="菜单类型" label-width="72px">
        <el-radio v-model="tempItem.type" :label="0">目录</el-radio>
        <el-radio v-model="tempItem.type" :label="1">菜单</el-radio>
        <el-radio v-model="tempItem.type" :label="2">功能</el-radio>
      </el-form-item>

      <el-form-item label="上级菜单" label-width="72px">
        <el-input v-model="tempItem.parentId"></el-input>
      </el-form-item>
      <el-form-item label="菜单名称" label-width="72px">
        <el-input v-model="tempItem.name"></el-input>
      </el-form-item>
      <el-form-item label="菜单标识" label-width="72px">
        <el-input v-model="tempItem.identification"></el-input>
      </el-form-item>
      <el-form-item label="菜单地址" label-width="72px">
        <el-input v-model="tempItem.url"></el-input>
      </el-form-item>
      <el-form-item label="图标" label-width="72px">
        <el-input v-model="tempItem.icon"></el-input>
      </el-form-item>
      <el-form-item label="排序号" label-width="72px">
        <el-input v-model="tempItem.sort"></el-input>
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
      <el-button >取 消</el-button>
      <el-button type="primary" @click="createOrUpdateItem"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { createOrUpdateItem } from '../../mixins/createOrUpdateItem'
export default {
  mixins: [createOrUpdateItem],

  computed: {
    ...mapState('menus', ['dialogTitle', 'tempItem']),
    dialogVisible: {
      get () {
        return this.$store.state.menus.dialogVisible
      },
      set () {
        this.$store.commit('menus/closeDialog')
      }
    }
  },

  methods: {
    ...mapActions('menus', ['insertItem', 'updateItem'])

  }
}
</script>

<style></style>
