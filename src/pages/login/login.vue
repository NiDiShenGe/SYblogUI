<template>
  <div class="login">
    
     <div class="main">
      <Sign_in></Sign_in>
      <a style="margin-left: 50vh;">没有密码?点此注册</a>
     </div>
  </div> 
</template>

<script lang="ts" setup name="">
import Sign_in from './sign_in.vue';

 

</script>

<style>
.login{
  width: 100%;
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    background-color: #dae4d9;
    color: #a0a5a8;


}
.main{
    position: static;
    width: 600px;
    height: 300px;
    min-width: 200px;
    min-height: 120px;
    padding: 25px;
    background-color: #F0F5F2;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    border-radius: 20px;
    overflow: hidden;
    margin:auto;
    margin-top: 20vh
}
</style>