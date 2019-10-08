<template>
  <div class="header_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <!-- <el-breadcrumb-item
        v-for="(item, index) in $route.meta"
        :key="index"
      >{{item}}</el-breadcrumb-item> -->
    </el-breadcrumb>
    <el-dropdown class="exit" @command="handleCommand">
      <!-- <span class="el-dropdown-link avator">
        <img src="../assets/img/avator.jpg" alt=""><i class="el-icon-arrow-down el-icon--right"></i>
      </span> -->
      <img src="../assets/img/avator.jpg" class="el-dropdown-link avator">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="/home">首页</el-dropdown-item>
        <el-dropdown-item command="/login">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avator: '../assets/img/avator.jpg'
    }
  },
  methods: {
    handleCommand (para) {
      this.$router.push(para)
    }
  }
}
</script>

<style lang="scss">
.header_container {
  width: 100%;
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  .el-breadcrumb-item {
    cursor: pointer;
  }
  .avator {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .exit {
    width: 60px;
    margin-right: 30px;
  }
}

</style>
