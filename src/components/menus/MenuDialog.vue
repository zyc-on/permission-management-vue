<template>
  <el-dialog title="编辑菜单" :visible.sync="dialogVisible" center>
    <el-form :model="tempItem">
      <el-form-item label="菜单类型" label-width="72px">
        <el-radio-group v-model="tempItem.type" disabled>
          <el-radio :label="0">目录</el-radio>
          <el-radio :label="1">菜单</el-radio>
          <el-radio :label="2">功能</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="上级菜单" label-width="72px">
        <el-input v-model="tempItem.parentId" disabled />
      </el-form-item>
      <el-form-item label="菜单名称" label-width="72px">
        <el-input v-model="tempItem.name" />
      </el-form-item>
      <el-form-item label="菜单标识" label-width="72px">
        <el-input v-model="tempItem.identification" />
      </el-form-item>
      <el-form-item label="图标" label-width="72px">
        <el-popover placement="bottom-start" width="450" trigger="click">
          <icon-select @selected="selectIcon" />
          <el-input
            slot="reference"
            v-model="tempItem.icon"
            placeholder="点击选择图标"
            readonly
          >
            <i
              v-if="tempItem.icon"
              slot="prefix"
              :class="tempItem.icon"
              class="el-input__icon"
              style="height: 32px;width: 16px;"
            ></i>
            <i v-else slot="prefix" class="el-icon-search el-input__icon" />
          </el-input>
        </el-popover>
      </el-form-item>
      <el-form-item label="排序号" label-width="72px">
        <el-input v-model="tempItem.sort" />
      </el-form-item>
      <el-form-item label="状态" label-width="72px">
        <el-radio v-model="tempItem.status" :label="1">有效</el-radio>
        <el-radio v-model="tempItem.status" :label="0">无效</el-radio>
      </el-form-item>
      <el-form-item label="URL" label-width="72px">
        <el-input v-model="tempItem.url" />
      </el-form-item>
      <el-form-item label="组件名" label-width="72px">
        <el-input v-model="tempItem.component" />
      </el-form-item>
      <el-form-item label="备注" label-width="72px">
        <el-input
          type="textarea"
          :rows="2"
          v-model="tempItem.description"
          placeholder="请输入内容"
        />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button>取 消</el-button>
      <el-button type="primary" @click="createOrUpdateItem">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { createOrUpdateItem } from '../../mixins/createOrUpdateItem'
import IconSelect from '../../components/IconSelect'
export default {
  components: {
    IconSelect
  },
  mixins: [createOrUpdateItem],

  computed: {
    ...mapState('menus', ['tempItem']),
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
    ...mapActions('menus', ['insertItem', 'updateItem']),
    selectIcon (name) {
      this.tempItem.icon = name
    }
  }
}
</script>

<style></style>
