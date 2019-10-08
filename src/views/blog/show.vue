<template>
  <div id="showBlog" style="width: 800px;padding: 30px;">
    <BlogHead></BlogHead>
    <h2>{{ blogData.title }}</h2>
    <p style="height: 40px;line-height:40px; text-indent: 5px;">
      <i class="el-icon-time"></i><span>&nbsp;&nbsp; {{ blogData.createAt | filterTime }} </span>
      <i class="el-icon-user"></i><span>&nbsp;&nbsp; {{ blogData.username }} </span>
    </p>
    <div v-html="blogData.content" style="width: 100%;height: 500px;padding: 20px;background: #dadada;table-layout:fixed; word-break:break-all; overflow-y:auto;"></div>
  </div>
</template>

<script>
import mixin from '../../components/mixin'
import BlogHead from '../../components/blogHead.vue'
import { article } from '@/utils/api'
export default {
  components: {
    BlogHead
  },
  mixins: [mixin],
  data () {
    return {
      blogData: {}
    }
  },
  created () {
    // console.log('创建后')
    let that = this
    article('/article', { type: 'show', id: this.$route.query.id }).then(res => {
      that.$set(that, 'blogData', res.data.data)
    }).catch(error => console.log(error))
  }
  // beforeCreate () { console.log('创建前') },
  // beforeMount () { console.log('挂载前') },
  // mounted () { console.log('挂载前') },
  // beforeUpdate () { console.log('更新前') },
  // updated () { console.log('更新后') },
  // beforeDestroy () { console.log('删除前') },
  // destroyed () { console.log('删除后') }
}
</script>
