<template>
  <el-form class="container">
    <el-form-item label="账号">
       <el-input v-model="account" placeholder="输入你的账号" clearable />
    </el-form-item>
    <el-form-item label="密码">
       <el-input v-model="passward" placeholder="输入你的密码" clearable   show-password/>
    </el-form-item>
    <el-form-item label="验证码">
       <el-input v-model="check" placeholder="输入验证码" sclearable  style="width: 50%;"/>
       <hr>
        <el-image :src="src" slot = placeholder></el-image>
    </el-form-item>
    <el-form-item>
    </el-form-item>
    <el-form-item>
      <el-button color="#829D93"  style="margin-left: 30%;padding-left: 30px;padding-right: 30px;color:gray">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup name="">
import { reactive ,ref} from 'vue';
const account=ref('');
const passward=ref();
const check=ref('');
const src=''

</script>

<style scoped>
  .container{
    margin:5vh 15vh auto 15vh;
  }
  .el-button:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
</style>