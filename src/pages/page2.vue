<template>
  <div class="container">
    <el-form :model="form" @submit.native.prevent="submitForm" class="form">
      <el-form-item label="作者">
        <el-input v-model="form.author" placeholder="请输入作者名" clearable ></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="form.tags" placeholder="请输入标签" clearable ></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="form.title" placeholder="请输入标题" clearable ></el-input>
      </el-form-item>
      <el-form-item label="正文" class="content-item">
        <el-input type="textarea" v-model="form.content" :autosize="{ minRows: 10}" placeholder="请输入正文" clearable ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" class="submit-button">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  author: '',
  tags: '',
  title: '',
  content: ''
})

const submitForm = async () => {
  const response = await fetch('/api/blogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form.value)
  })

  if (!response.ok) {
    console.error('提交博客失败')
    return
  }

  console.log('博客已成功提交')
  form.value = {
    author: '',
    tags: '',
    title: '',
    content: ''
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  margin:0px;
  background-color: #f5f5f5;
  flex-grow: 1;
  min-height: 86vh;
}

.form {
  min-height: 60vh;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width:120vh;
  margin-top: 5vh;  
  margin-bottom: 5vh;
}

.content-item {
  flex-grow: 1;
}

.submit-button {
  display: block;
  width: 50%;
  margin-top: 20px;
  background-color: #829D93;
  display: block;
  color: gray;
  box-shadow: 0 0 2px;  
  margin-left: auto;
  margin-right: auto;
}
.submit-button:hover{
  transform: scale(1.1);
  background-color:#ADC2B5;
}
</style>
