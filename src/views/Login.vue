<template>
  <div class="login">
    <el-form
      ref="loginForm"
      :model="user"
      label-position="left"
      label-width="0px"
      class="login-form"
    >
      <h3>
        后台管理系统
      </h3>
      <el-form-item prop="username">
        <el-input
          v-model="user.username"
          prefix-icon="el-icon-user"
          type="text"
          placeholder="账号"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="user.password"
          prefix-icon="el-icon-key"
          type="password"
          placeholder="密码"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >
          <span>{{ loading ? '登录中' : '登录' }}</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '../api/user'
import { fetchAsideMenus } from '../api/menu'
export default {
  data () {
    return {
      user: {
        username: '123456',
        password: '123456'
      },
      loading: false
    }
  },

  methods: {
    async handleLogin () {
      this.loading = true
      const res = await login(this.user)
      console.log(res)
      if (res.data.token) {
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('permissions', JSON.stringify(res.data.permissions))

        const response = await fetchAsideMenus()
        console.log(response)
        sessionStorage.setItem('allAsideMenus', JSON.stringify(response.data.data))

        this.$router.push('/home')
      } else {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-form {
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  width: 385px;
  padding: 25px 25px 5px 25px;

  h3 {
    margin: 0 auto 30px auto;
    text-align: center;
    color: #707070;
  }

  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
</style>
