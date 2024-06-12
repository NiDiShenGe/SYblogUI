<template>
    <div class="app">
        <el-container>
            <el-header  class="myHeader">
                <Header/>    
            </el-header>
         <el-container>
          <el-aside width="200px">
            
             </el-aside>
             <el-main>
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
    background-color:grey;
    height:50px;
   }
  .myFooter{
    height:100px
  }
</style>