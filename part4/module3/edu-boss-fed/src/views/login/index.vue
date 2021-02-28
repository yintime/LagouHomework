<template>
  <div class="login">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="80px"
        label-position="top">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
        v-model="form.password"
        type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
        type="primary"
        :loading="isLoginLoading"
        @click="onSubmit"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import request from '@/utils/request'
import { login } from '@/services/user'

export default {
  name: 'LoginIndex',
  data () {
    return {
      // 表单数据存储
      form: {
        phone: '18201288771',
        password: '111111'
      },
      // 定义校验规则
      rules: {
        phone: [
          { required: 'true', message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: 'true', message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度为6位18位', trigger: 'blur' }
        ]
      },
      // 用于保存加载状态
      isLoginLoading: false
    }
  },
  methods: {
    // 表单提交
    async onSubmit () {
      // console.log('clicked submit')
      try {
        // 校验
        await this.$refs.form.validate()
        this.isLoginLoading = true
        // 校验成功处理 发送请求
        // 解构 只接受返回对象的data
        const { data } = await login(this.form)
        this.isLoginLoading = false
        // 响应处理
        // console.log(data)
        if (data.state === 1) {
          this.$store.commit('setUser', data.content)
          this.$message.success('登录成功')
          this.$router.push(this.$route.query.redirect || '/')
          // save user info to vuex
        } else {
          this.$message.error('登录失败')
        }
      } catch (error) {
        // 校验失败处理
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .el-form {
    background-color: #fff;
    padding: 20px;
    width: 300px;
    border-radius: 10px;

    .el-button{
      width: 100%;
    }
  }
}
</style>
