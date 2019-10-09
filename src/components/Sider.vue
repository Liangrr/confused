<template>
  <div id="menu">
    <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" background-color="#324057" text-color="#bfcbd9" router>
      <el-menu-item index="index"><i class="el-icon-menu"></i>首页</el-menu-item>
      <el-submenu :index="item.index" v-for="(item, i) in menuList" :key="i">
        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
        <el-menu-item :index="list.link" v-for="(list, j) in item.lists" :key="j">{{ list.name }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        { index: '2',
          title: '数据管理',
          icon: 'el-icon-document',
          lists: [
            { link: 'userList', name: '用户列表' },
            { link: 'shopList', name: '商家列表' },
            { link: 'foodList', name: '食品列表' },
            { link: 'orderList', name: '订单列表' },
            { link: 'adminList', name: '管理员列表' }
          ]
        },
        { index: '3', title: '添加数据', icon: 'el-icon-plus', lists: [{ link: 'addShop', name: '添加商铺' }, { link: 'addGoods', name: '添加商品' }] },
        { index: '4', title: '地图', icon: 'el-icon-location', lists: [{ link: 'amap', name: '地图' }] },
        { index: '5', title: '博客', icon: 'el-icon-menu', lists: [{ link: 'blog', name: '博客' }] },
        { index: '6', title: '说明', icon: 'el-icon-warning', lists: [{ link: 'explain', name: '说明' }] },
        { index: '7', title: '设置', icon: 'el-icon-setting', lists: [{ link: 'adminSet', name: '管理员设置' }] }
      ]
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  },
  filters: {
    iFilter (value) {
      return value + 1
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#menu {
  height: 100%;
}
</style>
