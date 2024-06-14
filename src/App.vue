<template>
    <div class="app">
        <el-container>
            <Header></Header>
         <el-container>
             <el-main style="padding: 0px">
                <RouterView></RouterView>
             </el-main>
         </el-container>
            <el-footer class="myFooter">
                <Footer/>
            </el-footer>
        </el-container>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView,RouterLink } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<style scoped>
   .myHeader{
    background-color:#86B99B;
    height:8vh;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
   }
  .myFooter{
    height:6vh;
    background-color: #86B99B;
  }
</style>