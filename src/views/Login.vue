<template>
  <div id="login">
    <el-form :model="userForm"
             ref="userForm">
      <h2 class="title">后台管理系统</h2>
      <el-form-item v-for="(row, i) in rows"
                    :key="i"
                    :prop="row.name"
                    :rules="row.rules">
        <el-input v-model="userForm[row.name]"
                  :type="row.type"
                  :prefix-icon="row.prefix"></el-input>
      </el-form-item>
      <el-button style="width:100%;margin-bottom: 30px;"
                 @click="handleLogin">登录</el-button>
      <el-form-item>
        <el-button style="float: left;"
                   size="mini"
                   @click="handleRegister">注册账号</el-button>
        <el-button style="float: right;"
                   size="mini"
                   @click="handleForget">忘记密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/utils/api'

export default {
  data () {
    return {
      userForm: {
        account: null,
        password: null
      },
      rows: [
        {
          label: '账号',
          name: 'account',
          type: 'text',
          prefix: 'el-icon-s-custom',
          rules: [
            { required: true, message: '账号不能为空' },
            { pattern: /^[a-zA-Z][0-9a-zA-Z]{5,11}$/, message: '以字母开头,且长度在6-12' }

          ]
        },
        {
          label: '密码',
          name: 'password',
          type: 'password',
          prefix: 'el-icon-goods',
          rules: [
            { required: true, message: '密码不能为空' },
            { pattern: /^(?=.*[0-9])(?=.*[A-Za-z])[0-9a-zA-Z]{6,12}$/, message: '密码必须包含数字，字母,且长度在6-12' }
          ]
        }
      ]
    }
  },
  methods: {
    handleRegister () {
      this.$router.push('/register')
    },
    handleForget () {
      this.$router.push('/forget')
    },
    async handleLogin (para) {
      let that = this
      this.$refs['userForm'].validate(async (valid) => {
        if (valid) {
          const data = {
            username: this.userForm.account,
            password: this.userForm.password
          }
          login('/login', data).then((response) => {
            const data = response.data
            if (data.code === 200) {
              that.$store.commit('SET_TOKEN', data.token)
              that.$store.commit('GET_USER', data.user)
              that.$router.push('/home')
            } else {
              that.$message({
                showClose: true,
                message: data.msg,
                type: 'error'
              })
            }
          }).catch((error) => {
            console.log(error)
          })
        } else {
          this.$message({
            showClose: true,
            message: '您的输入有误',
            type: 'error'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
#login {
  width: 100%;
  height: 100%;
  background-color: #324057;
  display: flex;
  flex-direction: row; /* 子元素横向排列 */
  justify-content: center; /* 相对父元素水平居中 */
  align-items: center; /*  子元素相对父元素垂直居中 */
  .title {
    text-align: center;
    height: 50px;
  }
  .el-form {
    width: 300px;
    min-height: 200px;
    padding: 30px 30px 5px 30px;
    background: white;
    border-radius: 5px;
  }
}
</style>
