<template>
  <div>
   <el-form class="container" :model="form" :rules="rules" ref="formRef">
    <el-form-item label="注册邮箱" prop="email">
      <el-input v-model="form.email" placeholder="请输入邮箱" clearable ></el-input>
    </el-form-item>
    <el-form-item label="账号" prop="account">
      <el-input v-model="form.account" placeholder="请输入账号" clearable ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" placeholder="请输入密码" type='password' clearable ></el-input>
    </el-form-item>
    <br>
    <el-form-item>
      <el-button color="#829D93"style="margin-left: 10vh;padding-left: 30px;padding-right: 30px;color:gray" @click="submitForm">注册</el-button>
    </el-form-item>
   </el-form>
  </div> 
</template>

<script lang="ts" setup name=""> 
  import{ref }from 'vue'
  const form = ref({
    email: '',
    password: '',
    account: ''
  })
  
  const formRef = ref()

  const rules = {
    email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '请输入有效的邮箱地址', trigger: 'blur' }
    ],
    account: [
      { required: true, message: '请输入账号', trigger: 'blur' },
      { min: 10, message: '账号必须大于等于10位', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: '密码必须有6位以上且由数字和字母组成', trigger: 'blur' }
    ]
  }

  const submitForm = () => {
    formRef.value.validate((valid: boolean) => {
      if (valid) {
        alert('注册成功')
      } else {
        alert('表单填写不符合要求')
      }
    })
  }
</script>

<style>
 .container{
    margin:5vh 15vh auto 15vh;
  }
</style>
