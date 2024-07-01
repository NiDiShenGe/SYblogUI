<template>
  <div class="background">
    <div class="mask">
      <div v-for="(barrage, index) in barrages" :key="index" class="barrage" :style="{ top: barrage.top, color: barrage.color, 'animation-delay': `${barrage.delay}s` }">{{ barrage.text }}</div>
    </div>
    <div class="bottom">
      <el-input v-model="input" placeholder="请输入内容" class="content" @keyup.enter="sent"></el-input>
      <el-button @click="sent" class="send">发送</el-button>
    </div>
  </div>
</template>

<script lang='ts' setup >
import { ref, onMounted } from 'vue'
import axios from 'axios';
const input = ref('')
interface Barrage {
  text: string;
  top: string;
  color: string;
  delay?: number; // 可选属性，用于设置延迟
}

const barrages = ref<Barrage[]>([]);

onMounted(() => {
  const savedBarrages = localStorage.getItem('barrages');
  if (savedBarrages) {
    const parsedBarrages: Barrage[] = JSON.parse(savedBarrages);
    // 为每条弹幕设置延迟时间
    const barragesWithDelay = parsedBarrages.map((barrage, index) => ({
      ...barrage,
      delay: index * 0.5, // 每条弹幕延迟0.5秒
    }));
    barrages.value = barragesWithDelay;
  }
});

function sent(){
  if(input.value){
    const top = Math.random() * 70; // 随机生成弹幕的高度
    barrages.value.push({ text: input.value, top: `${top}vh` ,color:getRandomColor()});
    localStorage.setItem('barrages', JSON.stringify(barrages.value)); // 保存到localStorage
    input.value = '';
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// async function loadBarrages() {
//   try {
//     const response = await fetch('http://localhost:3000/barrages'); // api地址
//     const data = await response.json();
//     barrages.value = data.map((barrage: any) => ({
//       ...barrage,
//       top: `${Math.random() * 80}vh`, // 为每个弹幕随机生成高度
//     }));
//   } catch (error) {
//     console.error('Failed to load barrages:', error);
//   }
// }
// async function sent() {
//   if (input.value) {
//     const color = getRandomColor(); // 随机生成颜色
//     try {
//       await fetch('http://localhost:3000/barrages', { // api地址
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: input.value, color }),
//       });
//       input.value = ''; // 清空输入框
//       await loadBarrages(); // 重新加载弹幕列表
//     } catch (error) {
//       console.error('Failed to send barrage:', error);
//     }
//   }
// }
// onMounted(loadBarrages);
</script>

<style scoped>
 .el-input{
    width: 80%;
    margin: 0 0 0 20vh;
 }
 .el-button{
    margin-left: 1vh;
 }
  .mask{
   height: 80vh;
   position: relative;
   overflow: hidden;
  }
  .background{
    background-image: url('../assets/images/background.jpg');
    background-size: cover;
    height: 86vh;
  }
  @keyframes move {
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(0vw);
    opacity: 0;
  }
}
.barrage {
  animation: move 10s linear infinite;
  white-space: nowrap;
  position: absolute;
  background-color: rgba(0,0 ,0, 0.5);
  padding: 5px 10px;
  border-radius: 10px;
  font-family: Microsoft YaHei UI;
  opacity: 0; /* 初始状态不可见 */
}
</style>