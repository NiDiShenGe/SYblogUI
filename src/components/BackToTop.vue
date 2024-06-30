<template>
    <div v-if="isVisible" @click="scrollToTop" class="back-to-top">
      ↑ 返回顶部
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isVisible = ref(false);
  
  const checkVisibility = () => {
    isVisible.value = window.scrollY > 200;
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', checkVisibility);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkVisibility);
  });
  </script>
  
  <style>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    background-color: #f5f5f5;
    border: 1px solid #dcdcdc;
    padding: 10px 15px;
    border-radius: 10px;
    transition: opacity 0.3s;
    opacity: 0.7;
    color:#457B6F
  }
  
  .back-to-top:hover {
    opacity: 1;
  }
  </style>