<template>
  <div id="register">
    <el-steps :active="active"
              finish-status="success">
      <el-step title="填写用户信息"></el-step>
      <el-step title="注册成功"></el-step>
    </el-steps>
    <div v-if="active === 0"
         style="margin-top: 30px;width: 100%;display:flex; justify-content: center;">
      <el-form :model="registerForm"
               ref="registerForm">
        <el-form-item v-for="(row, i) in rows"
                      :key="i"
                      :prop="row.name"
                      :rules="row.rules">
          <el-input v-model="registerForm[row.name]"
                    :type="row.type"
                    :prefix-icon="row.prefix"
                    :placeholder="row.placeholder"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div v-else-if="active === 1">注册成功，{{ time }}后跳转至
      <a @click="handleLogin"
         style="color: #2bc2fc">登录</a>页面</div>
    <el-button style="margin-top: 12px;"
               @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      time: 3,
      registerForm: {
        account: null,
        password: null,
        phone: null
      },
      rows: [
        {
          label: '账号',
          name: 'account',
          type: 'text',
          placeholder: '请输入账号',
          prefix: 'el-icon-s-custom',
          rules: [
            { required: true, message: '账号不能为空' }
          ]
        },
        {
          label: '密码',
          name: 'password',
          type: 'password',
          placeholder: '请输入密码',
          prefix: 'el-icon-goods',
          rules: [
            { required: true, message: '密码不能为空' }
          ]
        },
        {
          label: '手机号',
          name: 'phone',
          type: 'text',
          placeholder: '请输入手机号',
          prefix: 'el-icon-phone',
          rules: [
            { required: true, message: '手机号不能为空' }
          ]
        }
      ]
    }
  },
  methods: {
    next () {
      let _this = this
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          this.$axios.post('/register', {
            username: this.registerForm.account,
            password: this.registerForm.password,
            phone: this.registerForm.phone
          })
            .then(function (response) {
              const data = response.data
              if (data.code === 200) {
                _this.reverseFn()
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
    },
    reverseFn () {
      let _this = this
      this.active++
      if (this.active > 0) {
        const interval = setInterval(function () {
          _this.$nextTick(function () {
            _this.time--
            if (_this.time < 0) {
              clearInterval(interval)
              _this.$router.push('/login')
            }
          })
        }, 1000)
      }
    },
    handleLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
#register {
  width: 100%;
  height: 100%;
  padding: 50px 20%;
  box-sizing: border-box;
  .el-steps--horizontal {
    min-width: 600px;
    text-align: left;
  }
  // margin: 20px 10%;
  // display: flex;
  // flex-direction: row; /* 子元素横向排列 */
  // justify-content: center; /* 相对父元素水平居中 */
  // align-items: center; /*  子元素相对父元素垂直居中 */
}
</style>
