<template>
  <header class="app-header">
    <div class="icon-wrapper hover-effect" @click="$emit('toggleMenu')">
      <i class="el-icon-s-fold" :class="{ 'icon-reverse': fold }"></i>
    </div>
    <span class="brand">Some Text</span>
    <div class="right-menu">
      <el-tooltip content="全屏">
        <div class="icon-wrapper hover-effect">
          <i class="el-icon-full-screen"></i>
        </div>
      </el-tooltip>
      <el-dropdown class="avatar-container hover-effect" trigger="click">
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
  </header>
</template>

<script>
export default {
  props: {
    fold: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.hover-effect {
  cursor: pointer;
  transition: background 0.3s;
}

.app-header {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

span.brand{
  flex-grow: 1;
}

  .icon-wrapper {
    width: 40px;
    text-align: center;
    i {
      font-size: 22px;
      color: #5a5e66;
      cursor: pointer;
    }

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  span{
    font-size: 15px;
  }

  .right-menu {
    display: flex;
    align-items: center;

    img.user-avatar {
      height: 40px;
      width: 40px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  i.icon-reverse {
    transform: rotate(180deg);
  }
}
</style>
