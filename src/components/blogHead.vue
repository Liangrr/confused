<template>
  <div>
    <el-row style="text-align: center;margin-bottom: 30px;">
      <el-col :span="6"><el-button @click="articleFun('/blog')">查看主页</el-button></el-col>
      <el-col :span="6"><el-button @click="articleFun('/increase')">写文章</el-button></el-col>
      <el-col :span="6"><el-button disabled @click="articleFun('/essay')">文章管理</el-button></el-col>
      <el-col :span="6"><el-button disabled @click="articleFun('/comment')">评论管理</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    articleFun (type) {
      this.$router.push(type)
    }
  }
}
</script>
