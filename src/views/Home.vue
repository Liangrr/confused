<template>
  <div class="home">
    <Sider />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  created () {
    this.$store.state.username = sessionStorage.getItem('token')
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
