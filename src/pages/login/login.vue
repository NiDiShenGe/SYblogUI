<template>
  <div class="login">
     <div class="main">
      <RouterLink :to="{name:'signUp'}" style="margin-left: 2vh;color:gray">我要注册</RouterLink>
      <RouterLink :to="{name:'signIn'}" style="margin-left: 2vh;color:gray">我要登录</RouterLink>
      <RouterView></RouterView>
     </div>
  </div> 
</template>

<script lang="ts" setup name="">

 

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
    width: 30%;
    height: 30%;
    min-width: 20%;
    min-height: 12%;
    padding: 2.5%;
    background-color: #F0F5F2;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #d1d9e6;
    border-radius: 20px;
    overflow: hidden;
    margin:auto;
    margin-top: 20vh
}

/* For tablets: */
@media only screen and (max-width: 768px) {
    .main {
        width: 80%;
        height: 40%;
    }
}

/* For mobile phones: */
@media only screen and (max-width: 500px) {
    .main {
        width: 100%;
        height: 50%;
    }
}
</style>