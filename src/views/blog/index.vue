<template>
  <div class="blog">
    <div class="bloglist" v-for="(item, i) in blogData" :key="i">
      <h2><a href="#">{{ item.title }}</a></h2>
      <ul>
        <li>{{ item.title }}</li>
        <li class="readmore"><a href="#">阅读全文>></a></li>
        <li class="dateview">
          <i class="el-icon-time"></i><span>&nbsp;&nbsp; {{ item.time }} </span>
          <i class="el-icon-user"></i><span>&nbsp;&nbsp; {{ item.user }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogData: [
        {
          title: '常见数据结构和Javascript实现总结',
          time: '2019-09-03',
          user: '小明'
        },
        {
          title: '常见数据结构和Javascript实现总结',
          time: '2019-09-03',
          user: '小明'
        }
      ]
    }
  },
  created () {
    this.$axios.post('/article').then(res => {
      console.log('res', res)
    }).catch(error => console.log(error))
  }
}
</script>

<style lang="scss">
.blog {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .bloglist {
    background: #f1f1f1;
    margin: 20px 5px;
    clear: both;
    overflow: hidden;
    h2 {
      line-height: 29px;
      height: 29px;
      font-size: 14px;
      color: #3b3b3b;
      padding: 10px 0 10px 50px;
      background: url(../../assets/libg.png) 10px -294px no-repeat;
      a {
        color: #3b3b3b;
        display: block;
        width: 80%;
      }
    }
    ul {
      line-height: 24px;
      padding-left: 40px;
      padding-right: 20px;
      margin-bottom: 20px;
      li {
        text-indent: 2em;
        a {
          color: #e84545;
          text-decoration: none;
        }
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
