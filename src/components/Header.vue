<template>
  <div>
     <el-menu mode="horizontal" style="background-color: #86B99B;height: 8vh;">
       <h1 style="align-items: center;color: lightgreen;size:1vh;margin-left:2%">SYBLOG</h1>
       <el-menu-item @click="goToPage('firstPage')" style="margin-left: 2%;">
         <el-button :class="activePage === 'firstPage' ? 'active' : 'unactive'" style="color:grey">浏览博客</el-button>
       </el-menu-item>
       <el-menu-item @click="goToPage('secondPage')">
         <el-button :class="activePage === 'secondPage' ? 'active' : 'unactive'" style="color:grey">写博客</el-button>
       </el-menu-item>
       <el-menu-item @click="goToPage('thirdPage')">
         <el-button :class="activePage === 'thirdPage' ? 'active' : 'unactive'" style="color:grey">弹幕空间</el-button>
       </el-menu-item>
       <el-menu-item @click="goToPage('fourthPage')">
         <el-button :class="activePage === 'fourthdPage' ? 'active' : 'unactive'" style="color:grey">技术网站</el-button>
       </el-menu-item>
       <div class="spacer"></div>
       <el-menu-item @click="goToPage('signIn')">
         <el-button :class="activePage === 'signIn' ? 'active' : 'unactive'" style="color:grey;margin-right: 0;">登录/注册</el-button>
       </el-menu-item>
       <el-menu-item @click="goToPage('myPage')"style='float: right' >
         <el-avatar src="https://avatars.githubusercontent.com/u/1?v=4"></el-avatar>
       </el-menu-item>
     </el-menu>
   </div>
</template>

<script lang="ts" setup name="Header">
    import router from '@/router';
    import SvgIcon from './SvgIcon/index.vue'
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const activePage = ref('firstPage');

    function goToPage(pageName:string){
        activePage.value = pageName;
        router.push(
            {
                name:pageName
            }
        )
    }
</script>

<style scoped>
  .unactive{
    background-color:#ADC2B5;
    display: block;
    color: gray;
    box-shadow: 0 0 2px;
    width: 100px;
  }
  .active{
    background-color: #829D93;
    padding:  30px 30px 30px 30px
  }
  .unactive:hover, .active:hover {
  transform: scale(1.1);
}
.el-menu{
}
.spacer {
  margin-left: 59vh;
}
</style>
