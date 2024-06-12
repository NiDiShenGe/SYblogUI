<template>
    <div class="app">
        <el-container>
            <el-header height="50px" style="background: gray;">
                <Header/>
            </el-header>
            <el-main><Person/></el-main>
            <el-footer height="100px"><Footer/></el-footer>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>

</style>