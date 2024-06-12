<template>
    <div>
        <el-row>
            <el-col :span="2 ">
                <h1 style="align-items: center;color: lightgreen;">SYBLOG</h1>
            </el-col>
            <el-col :span="1.5" style="margin: 10px;">
               <el-button :class="activePage === 'firstPage' ? 'active' : 'unactive'" @click="goToPage('firstPage')">第一页</el-button>
            </el-col>
            <el-col :span="1.5" style="margin: 10px; ">
                <el-button :class="activePage === 'secondPage' ? 'active' : 'unactive'" @click="goToPage('secondPage')">第二页</el-button>
            </el-col>
            <el-col :span="1.5" style="margin: 10px;">
                <el-button :class="activePage === 'thirdPage' ? 'active' : 'unactive'" @click="goToPage('thirdPage')">第三页</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup name="Header">
    import router from '@/router';
    import SvgIcon from './SvgIcon/index.vue'
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const activePage = ref('');

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
    background-color:lightgreen;
    display: block;
    color: gray;
    box-shadow: 0 0 2px;
  }
  .active{
    background-color: green;
  }
</style>
