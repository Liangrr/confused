<template>
  <div class="home">
    <el-row style="height: 100%;">
      <el-col
        :span="4"
        style="min-height: 100%; background-color: #324057;"
      >
        <Sider />
      </el-col>
      <el-col
        :span="20"
        style="height: 100%;overflow: auto;"
      >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  created () {
    // this.$store.state.username = sessionStorage.getItem('token')
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
