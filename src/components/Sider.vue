<template>
  <div id="menu">
    <el-menu class="el-menu-vertical-demo"
      background-color="#324057"
      text-color="#bfcbd9"
      :collapse="isCollapse">
      <el-menu-item v-for="(item, i) in menu"
                    :key="i"
                    :index="item.idx"
                    @click="handleClick(item.attr)">
        <template>
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      menu: [
        { idx: '1', title: '首页', attr: '/index', icon: 'el-icon-s-home' },
        { idx: '2', title: '资源', attr: '/resource', icon: 'el-icon-document' },
        { idx: '3', title: '博客', attr: '/blog', icon: 'el-icon-menu' },
        { idx: '4', title: '地图', attr: '/amap', icon: 'el-icon-location' },
        { idx: '5', title: '设置', attr: '/setting', icon: 'el-icon-setting' }
      ]
    }
  },
  filters: {
    iFilter (value) {
      return value + 1
    }
  },
  methods: {
    handleClick (para) {
      const path = this.$router.currentRoute.fullPath
      if (para !== path) {
        this.$router.push({ path: para })
      }
    }
  }
}
</script>

<style lang="scss">
#menu {
  height: 100%;
  .el-menu {
    width: 220px;
    height: 100%;
  }
}
</style>
