<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <bread-crumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-tooltip content="全屏">
        <i class="el-icon-full-screen right-menu-item hover-effect"></i>
      </el-tooltip>
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img
            src="
              https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595934462921&di=35ec3f3b836251056e554f3a2982dd68&imgtype=0&src=http%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2020-6%2F2020617225141628.jpg
            "
            class="user-avatar"
          />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <span style="display:block;">
            <el-dropdown-item>
              布局设置
            </el-dropdown-item>
          </span>
          <router-link to="/user/center">
            <el-dropdown-item>
              个人中心
            </el-dropdown-item>
          </router-link>
          <span style="display:block;">
            <el-dropdown-item divided>
              退出登录
            </el-dropdown-item>
          </span>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from './Hamburger'
import BreadCrumb from './BreadCrumb'
export default {
  components: {
    Hamburger,
    BreadCrumb
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  align-items: center;

  .hamburger-container {
    line-height: 46px;
    height: 100%;

    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    flex-grow: 1;
  }

  .right-menu {
    height: 100%;
    display: flex;
    align-items: center;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      padding: 0 8px;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
