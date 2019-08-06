<template>
  <div id="login">
    <el-form :model="userForm"
             ref="userForm">
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
            { required: true, message: '账号不能为空' }
          ]
        },
        {
          label: '密码',
          name: 'password',
          type: 'password',
          prefix: 'el-icon-goods',
          rules: [
            { required: true, message: '密码不能为空' }
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
    handleLogin (para) {
      let _this = this
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          this.$axios.post('/login', {
            username: this.userForm.account,
            password: this.userForm.password
          })
            .then(function (response) {
              const data = response.data
              if (data.code === 200) {
                sessionStorage.setItem('token', data.userName)
                _this.$router.push('/home')
              } else {
                _this.$message({
                  showClose: true,
                  message: data.msg,
                  type: 'error'
                })
              }
            })
            .catch(function (error) {
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
  display: flex;
  flex-direction: row; /* 子元素横向排列 */
  justify-content: center; /* 相对父元素水平居中 */
  align-items: center; /*  子元素相对父元素垂直居中 */
  .el-form {
    width: 250px;
    height: 250px;
  }
}
</style>
