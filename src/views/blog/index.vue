<template>
  <div class="blog">
    <el-button @click="writeEvent">写博客</el-button>
    <div class="bloglist" v-for="(item, i) in blogData" :key="i">
      <h2><a href="#">{{ item.title }}</a></h2>
      <ul>
        <li class="content">{{ item.content }}</li>
        <li class="readmore"><a href="#">阅读全文>></a></li>
        <li class="dateview">
          <i class="el-icon-time"></i><span>&nbsp;&nbsp; {{ item.createAt | filterTime }} </span>
          <i class="el-icon-user"></i><span>&nbsp;&nbsp; {{ item.username }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogData: []
    }
  },
  filters: {
    filterTime (para) {
      return para.substr(0, 10)
    }
  },
  created () {
    let that = this
    this.$axios.post('/article', { type: 'all' }).then(res => {
      console.log('res', res)
      that.blogData = res.data
    }).catch(error => console.log(error))
  },
  methods: {
    writeEvent () {
      this.$router.push('/increase')
    }
  }
}
</script>

<style lang="scss">
.blog {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .bloglist {
    width: 850px;
    background: #f1f1f1;
    margin: 20px 0px;
    clear: both;
    overflow: hidden;
    h2 {
      line-height: 29px;
      height: 29px;
      font-size: 14px;
      color: #3b3b3b;
      padding: 5px 0 5px 50px;
      background: url(../../assets/libg.png) 10px -300px no-repeat;
      a {
        color: #3b3b3b;
        display: block;
        width: 80%;
        text-decoration: none;
      }
    }
    ul {
      line-height: 24px;
      padding-left: 40px;
      padding-right: 20px;
      margin-bottom: 20px;
      li {
        margin-bottom: 4px;
        a {
          color: #e84545;
          text-decoration: none;
        }
      }
      .content {
        width: 800px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .dateview {
        background: #fafafa;
        line-height: 24px;
        height: 24px;
        color: #838383;
        text-indent: 1em;
        i {
          text-align: center;
        }
      }
    }
  }
}
</style>
