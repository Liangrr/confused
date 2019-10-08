<template>
  <div id="forget">
    <el-form :model="forgetForm"
             ref="forgetForm">
      <el-form-item v-for="(row, i) in rows"
                    :key="i"
                    :prop="row.name"
                    :rules="row.rules">
        <el-input v-model="forgetForm[row.name]"
                  :type="row.type"
                  :prefix-icon="row.prefix"
                  :placeholder="row.placeholder"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="margin-top: 12px;"
                   @click="next">修改密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { forget } from '@/utils/api'

export default {
  data () {
    return {
      time: 3,
      forgetForm: {
        account: null
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
        }
      ]
    }
  },
  methods: {
    next () {
      let _this = this
      this.$refs['forgetForm'].validate((valid) => {
        if (valid) {
          forget('/forget', {
            username: this.forgetForm.account,
            password: this.forgetForm.password
          })
            .then(function (response) {
              const data = response.data
              if (data.code === 200) {
                _this.$message({
                  showClose: true,
                  message: data.msg,
                  type: 'success'
                })
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
      // 倒计时返回登录
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
  }
}
</script>

<style lang="scss">
#forget {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
