<template>
  <div class="page4bg">
   <div class="webs">
    <div class="row1">
     <div class="web" @click="openWeb('https://www.cnblogs.com/')"><img src="../assets/icons/cnblogs.svg" class="myicons" >博客园</div>
      <div class="web"@click="openWeb('https://juejin.cn/')"><img src="../assets/icons/juejin.svg" class="myicons">掘金</div>
      <div class="web"@click="openWeb('https://github.com/')"><img src="../assets/icons/github-fill.svg" class="myicons">Github</div>
    </div>
    <div class="row2">
      <div class="web"@click="openWeb('https://www.java.com/zh-CN/')"><img src="../assets/icons/java.svg" class="myicons">Java</div>
      <div class="web"@click="openWeb('https://www.reddit.com/')"><img src="../assets/icons/reddit.svg" class="myicons">Reddit</div>
      <div class="web"@click="openWeb('https://www.csdn.net/')"><img src="../assets/icons/csdn.svg" class="myicons">CSDN</div>
    </div>
    <div class="row3">
      <div class="web"@click="openWeb('https://stackoverflow.com/')"><img src="../assets/icons/stackoverflow.svg" class="myicons">StackOverflow</div>
      <div class="web"@click="openWeb('https://sourceforge.net/')"><img src="../assets/icons/sourceforge.svg" class="myicons">SourceForge</div>
      <div class="web"@click="openWeb('https://v3.cn.vuejs.org/')"><img src="../assets/icons/vue.svg" class="myicons">Vue</div>
   </div>
  </div>
  </div> 
</template>

<script lang="ts" setup name=""> 
import { ref, onMounted } from 'vue'
function openWeb(url:string){
  window.open(url)
}

</script>

<style>
 .page4bg{
   background-image: url('../assets/images/background.jpg');
   height: 86vh;
 }
 .webs{
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 100%;
   width: 80%;
   margin: auto;  
 }
  .myicons{
    width: 2vw;
    margin: 1vh
  }
  .web{
    display: flex;
    justify-content: center;
    align-items: center;
    width:20vw;
    height: 10vh;
    background-color: #86B99B;
    margin: 6vh 1vh 6vh 1vh;
    border-radius: 2vh;
    font-size: 3vh;
    padding: auto ;
    cursor: pointer;
  }
  .web:hover{
    transform: scale(1.2) ;
    transition: transform 0.5s ease;
    background: rgba(255, 255, 255, 0.2);
	  -webkit-backdrop-filter: blur(10px);
	  backdrop-filter: blur(10px);
  }
  @keyframes slideDown1 {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideDown2 {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideDown3 {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.row1{
  animation: slideDown1 0.5s ease-out forwards; /* 应用动画 */
}
.row2{
  animation: slideDown2 0.5s ease-out forwards; /* 应用动画 */
}
.row3{
  animation: slideDown3 0.5s ease-out forwards; /* 应用动画 */
}
</style>