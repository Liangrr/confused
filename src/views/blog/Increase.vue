<template>
  <div id="writeBlog" style="max-width: 800px;padding: 30px;">
    <el-row style="text-align: center;margin-bottom: 30px;">
      <el-col :span="8"><el-button @click="articleFun('/blog')">查看主页</el-button></el-col>
      <el-col :span="8"><el-button disabled @click="articleFun('/essay')">文章管理</el-button></el-col>
      <el-col :span="8"><el-button disabled @click="articleFun('/comment')">评论管理</el-button></el-col>
    </el-row>
    <el-input v-model="title" placeholder="请输入标题" style="margin-bottom: 30px;"></el-input>
    <div id="wangeditor" style="margin-bottom: 30px;">
      <div ref="editorElem"></div>
    </div>
    <el-button @click="send" disabled>发布</el-button>
    <el-button @click="save">保存</el-button>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'Editor',
  data () {
    return {
      title: '',
      editor: null,
      content: ''
    }
  },
  methods: {
    articleFun (type) {
      this.$router.push(type)
    },
    send () {},
    save () {
      let [that, bool] = [this, false]
      const data = {
        type: 'write',
        title: this.title,
        content: this.content,
        username: this.$store.state.username
      }
      console.log(data)
      Object.values(data).map(item => {
        if (item === '' || item === null) {
          bool = true
          return true
        }
      })
      if (bool) {
        this.$message.error('您输入的值不能为空')
      } else {
        this.$axios.post('/article', data).then(res => {
          if (res.data.code === 200) {
            that.$message({
              type: 'success',
              message: res.data.msg
            })
          }
        }).catch(error => console.log(error))
      }
    }
  },
  // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
  // props: ['catchData'], // 接收父组件的方法
  mounted () {
    this.editor = new E(this.$refs.editorElem)
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.content = html
      // this.catchData(this.content) // 把这个html通过catchData的方法传入父组件
    }
    this.editor.customConfig.menus = [
      // 菜单配置
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ]
    this.editor.create() // 创建富文本实例
  }
}
</script>
