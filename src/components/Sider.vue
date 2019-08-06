<template>
  <div id="menu">
    <el-menu class="el-menu-vertical-demo"
             :collapse="isCollapse">
      <el-menu-item v-for="(item, i) in menu"
                    :key="i"
                    :index="item.idx"
                    @click="handleClick">
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
        {
          idx: '1',
          title: '首页',
          icon: 'el-icon-s-home'
        },
        { idx: '2', title: '资源', icon: 'el-icon-document' },
        { idx: '3', title: '博客', icon: 'el-icon-menu' },
        { idx: '4', title: '设置', icon: 'el-icon-setting' }
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
      console.log('para', para)
    }
  }
}
</script>

<style lang="scss">
#menu {
  width: 200px;
  height: 100%;
}
</style>
