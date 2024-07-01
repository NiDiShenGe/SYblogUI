<template>
  <div>
    <div class="mypage">
      <div class="page">
         <div class="banner">
          <img src="../assets/images/background.jpg" alt="背景图片" style="width:100%;height:100%;object-fit:cover;">
         </div>
         <div class="people">
          <img class="author-avatar" :src="selectedPeople.avatarUrl" alt="用户头像">
         <br>
         <h1 style="font-size:5vh;margin-left:6vh;">{{ selectedPeople.id }}</h1>
      <h2 style="font-size:2vh;margin-left:6vh;">UID:{{ selectedPeople.account }}</h2>
      <div class="personal-info" style="display: flex; align-items: center;">
    <div>
      <h2 class="personal">{{ selectedPeople.sex }}|
        {{ selectedPeopleAge }}岁|
        {{ formatBirthday(selectedPeople.birthady)}}|
        {{ getZodiacSign(new Date(selectedPeople.birthady).getMonth() + 1, new Date(selectedPeople.birthady).getDate())}}
        现居{{ selectedPeople.adrress }}|
        来自{{ selectedPeople.from }}|
        tel{{ selectedPeople.phone }}|  
        {{ selectedPeople.email }}
      </h2>
    </div>
    <div class="additional-content">
      <h2>
        <ul class="techlist">
          <li v-for="tech in selectedPeople.techs":key="tech">{{ tech }}&#8194;</li>
        </ul>
      </h2>
    </div>
  </div>
   <div class="motto">
    <h2 style="font-size:2vh;margin: 0 6vh 1vh 6vh;color: grey;">自我介绍</h2>
    <h2 style="font-size:2vh;margin:0 6vh 0 6vh;">{{ selectedPeople.motto }}</h2>
   </div>
</div>
</div>
    </div>
  </div> 
</template>

<script lang="ts" setup name="MyPage"> 
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { nanoid } from 'nanoid';
  const people=ref([
    {account:'12345678910',
    id:'顺妃',
    birthady:'1999-09-09',
    sex:'女',
    phone:'12345678901',
    email:'123123123@123.com',
    motto:"我们都知道，只要有意义，那么就必须慎重考虑。 所谓我是顺飞，关键是我是顺飞需要如何写。 我们不得不面对一个非常尴尬的事实，那就是， 鲁巴金在不经意间这样说过，读书是在别人思想的帮助下，建立起自己的思想。带着这句话，我们还要更加慎重的审视这个问题： 既然如此， 一般来说， 一般来讲，我们都必须务必慎重的考虑考虑。 一般来说， 孔子曾经提到过，知之者不如好之者，好之者不如乐之者。这似乎解答了我的疑惑。 在这种困难的抉择下，本人思来想去，寝食难安。 我是顺飞因何而发生？ 每个人都不得不面对这些问题。 在面对这种问题时， 而这些并不是完全重要，更加重要的问题是。",
    from:'北京',
    adrress:'北京',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
    techs:['vue','react','angular'],},
    
  ])
  
  const selectedPeople = ref(people.value[0]);
  const selectedPeopleIndex = ref(0);
  const selectPeople = (index:any) => {
    selectedPeople.value = people.value[index];
  };
  const calculateAge = (birthday: string): number => {
  const birthDate = new Date(birthday);
  const difference = Date.now() - birthDate.getTime();
  const ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
const formatBirthday = (birthday: string): string => {
  const date = new Date(birthday);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}月${day}日`;
};
const getZodiacSign = (month: number, day: number): string => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return '白羊座';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return '金牛座';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return '双子座';
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return '巨蟹座';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return '狮子座';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return '处女座';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return '天秤座';
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return '天蝎座';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return '射手座';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return '摩羯座';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return '水瓶座';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return '双鱼座';
  } else {
    return '未知';
  }
};
const selectedPeopleAge = calculateAge(selectedPeople.value.birthady);

  onMounted(async () => {
    const response = await axios.get('https://your-api-url.com/people');
    people.value = response.data;
    selectedPeople.value = people.value[0];
  });
</script>

<style>
  .mypage{
    min-height: 86vh;
    width: 100%;
    background-color:black;
  }
  .page{
    height: auto;
    width: 60%;
    background-color: azure;
    margin: 0 auto;  
    box-shadow: 0px 0px 5px white; 
  }
  .banner{
    height: 16vh;
    background-color:red
  }
  .people{
    min-height: 70vh;
    background-color:aquamarine;
  }
  .author-avatar {
    width: 15vh;
    height: 15vh;
    border-radius: 50%; 
    margin:5vh;
    float: right;
    box-shadow: 0px 0px 10px grey 
  }
  .personal{
    margin-left:5vh;
    color:grey;
    width: 50vh;
    background-color: rgb(0,0,0,0.2);
    padding: 1vh;
    border-radius: 2vh;
    border:dashed green;
    box-shadow: 5px 2px 5px black; 
    font-size: 3vh;
  }
  .personal-info {
  display: flex;
  justify-content: space-between; /* 使内容分布在两端 */
}
.additional-content {
  margin-left:5vh;
    color:grey;
    width: 50vh;
    background-color: rgb(0,0,0,0.2);
    padding: 1vh;
    border-radius: 2vh;
    border:dashed orange;
    box-shadow: 5px 2px 5px black; 
    font-size: 2vh
}
.techlist {
  display: flex;
  list-style-type: none;
  padding: 0;
}
.motto{
    margin:0vh  5vh 0vh 5vh;
    color:grey;
    background-color: rgb(0,0,0,0.2);
    padding: 1vh;
    border-radius: 2vh;
    border:dashed blue;
    box-shadow: 5px 2px 5px black; 
    
}
</style>