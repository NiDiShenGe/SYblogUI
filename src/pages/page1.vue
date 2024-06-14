<template>
  <div class="container">
    <div class="sidebar">
      <h2 class="page1" style="text-align: center">博客列表</h2>
      <el-menu :default-active ="selectedPostIndex.toString()" active-text-color="white">
        <el-menu-item v-for="(post, index) in posts" :key="index" @click="selectPost(index)" :index="index.toString()"
        style="background-color:#A5DFCD;
        text-align: center; ">
          {{ post.title }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <el-card style="  background-color: rgba(255, 255, 255, 0.5);">
        <h2>{{ selectedPost.title }}</h2>
        <h3>作者：{{ selectedPost.author }}</h3>
        <div>标签：{{ selectedPost.tags.join(', ') }}</div>
        <div v-html="selectedPost.content"></div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup name="firstPage">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import BackGroundImage from '../assets/images/background.png';
  

  const posts = ref([
    { title: '加载中...', author: '加载中...', content: '加载中...', tags: ['加载中...dawdaasdsugauiwgduiawgduiagudgawuidgawuidgwauidguaigusidguiasgudiwgauidguiagduisgduiaguidwuiagawuidgsiuag'] },
    { title: '加载中...1', author: '加载中...1', content: '加载中...1', tags: ['加载中...1'] },
    { title: '加载中...2', author: '加载中...2', content: '加载中...2', tags: ['加载中...2'] },
    { title: '加载中...', author: '加载中...', content: '加载中...', tags: ['加载中...'] },
    { title: '加载中...1', author: '加载中...1', content: '加载中...1', tags: ['加载中...1'] },
    { title: '加载中...2', author: '加载中...2', content: '加载中...2', tags: ['加载中...2'] },
    { title: '加载中...', author: '加载中...', content: '加载中...', tags: ['加载中...'] },
    { title: '加载中...1', author: '加载中...1', content: '加载中...1', tags: ['加载中...1'] },
    { title: '加载中...2', author: '加载中...2', content: '加载中...2', tags: ['加载中...2'] },
    { title: '加载中...', author: '加载中...', content: '加载中...', tags: ['加载中...'] },
    { title: '加载中...1', author: '加载中...1', content: '加载中...1', tags: ['加载中...1'] },
    { title: '加载中...2', author: '加载中...2', content: '加载中...2', tags: ['加载中...2'] },
    { title: '加载中...', author: '加载中...', content: '加载中...', tags: ['加载中...'] },
    { title: '加载中...1', author: '加载中...1', content: '加载中...1', tags: ['加载中...1'] },
    { title: '加载中...2', author: '加载中...2', content: '加载中...2', tags: ['加载中...2'] },
    { title: '加载中...', author: '加载中...', content: '加载中...', tags: ['加载中...'] },
    { title: '加载中...1', author: '加载中...1', content: '加载中...1', tags: ['加载中...1'] },
    { title: '加载中...2', author: '加载中...2', content: '加载中...2', tags: ['加载中...2'] },
    { title: '加载中...', author: '加载中...', content: '加载中...', tags: ['加载中...'] },
    { title: '加载中...1', author: '加载中...1', content: '加载中...1', tags: ['加载中...1'] },
    { title: '加载中...2', author: '加载中...2', content: '加载中...2', tags: ['加载中...2'] },
    { title: '加载中...', author: '加载中...', content: '加载中...', tags: ['加载中...'] },
    { title: '加载中...1', author: '加载中...1', content: '加载中...1', tags: ['加载中...1'] },
    { title: '加载中...2', author: '加载中...2', content: '加载中...2', tags: ['加载中...2'] },
    
]);
  const selectedPost = ref(posts.value[0]);
  const selectedPostIndex = ref(0);
  const selectPost = (index:any) => {
    selectedPost.value = posts.value[index];
  };

  onMounted(async () => {
    const response = await axios.get('https://your-api-url.com/posts');
    posts.value = response.data;
    selectedPost.value = posts.value[0];
  });
</script>

<style scoped>
  .container {
    display: flex;
    background-color: #F0F5F2;
    margin:0px;
    background-image: url("/SYblogUI/src/assets/images/background.png");
  }
  .sidebar {
    width: 200px;
    background-color: #94D2A9;
    margin-left: 13%;
    margin-top: 2%;
    margin-bottom: 0;
    box-shadow: 5px 5px 10px grey;
    border-radius: 10px;
  }
  .content {
    flex-grow: 1;
    padding: 20px;
    margin-right: 13%; 
    margin-top:2%;  
    margin-bottom: 2%;
    border-radius: 10px;
  
  }
  .page1 {
    color:gray
  }
</style>