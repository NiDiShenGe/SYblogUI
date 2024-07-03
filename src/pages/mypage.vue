<template>
  <div class="mypage">
    <BackToTop></BackToTop>
    <div class="page">
     <div class="firstrow"> 
      <div class="uid">
         <img class="author-avatar" :src="selectedPeople.avatarUrl" alt="用户头像">
         <div class="people">
          <div style="font-size: 5vh">{{ selectedPeople.id }} </div>
          <br>
          <div style="font-size: 2vh;"> UID: {{ selectedPeople.account }}</div>
         </div>
      </div>
      <div class="techs">
         <div class="tech"  v-for="tech in selectedPeople.techs":key="tech">{{ tech }}</div>
      </div>
     </div>
     <div class="secondrow">
        <div class="personal-info">{{ selectedPeople.sex }}</div>
        <div class="personal-info">{{ selectedPeopleAge }}岁</div>
        <div class="personal-info">{{ formatBirthday(selectedPeople.birthday)}}</div>
        <div class="personal-info">{{ getZodiacSign(new Date(selectedPeople.birthday).getMonth() + 1, new Date(selectedPeople.birthday).getDate())}}</div>
        <div class="personal-info"> 现居{{ selectedPeople.address }}</div>
        <div class="personal-info"> 来自{{ selectedPeople.from }}</div>
        <div class="personal-info"> tel{{ selectedPeople.phone }}</div>
        <div class="personal-info"> {{ selectedPeople.email }}</div>
        </div>
        <div class="thirdrow">
          <div class="">{{ selectedPeople.motto }}</div>
        </div>
        <div class="blogs">
          <div class="blog" v-for="blog in blogs" :key="blog.id" >
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.content.split('\n').slice(0, 2).join('\n')}}......</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="MyPage"> 
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';
  import BackToTop from '@/components/BackToTop.vue';
  interface Person {   //定义Person接口
  account: string;
  id: string;
  birthday: string;
  sex: string;
  phone: string;
  email: string;
  motto: string;
  from: string;
  address: string;
  avatarUrl: string;
  techs: string[];
}
  interface Blog {    //定义blog接口
    id: string;
    title: string;
    content: string;
  }
  const componentKey = ref(0);
  const blogs=ref<Blog[]>([
    {id:'1',title:'为什么要玩原神',content:' 歌德在不经意间这样说过，读一本好书，就如同和一个高尚的人在交谈。我希望诸位也能好好地体会这句话。 我们一般认为，抓住了问题的关键，\n其他一切则会迎刃而解。 老子在不经意间这样说过，知人者智，自知者明。胜人者有力，自胜者强。我希望诸位也能好好\n地体会这句话。 而这些并不是完全重要，更加重要的问题是， 了解清楚为什么要玩原神到底是一种怎么样的存在，是解决一切问题的关键。 就我个人来说，为什么要玩原神对我的意义，不能不说非常重大。 为什么要玩原神的发生，到底需要如何做到，不为什么要玩原神的发生，又会如何产生。 为什么要玩原神因何而发生?要想清楚，为什么要玩原神，到底是一种怎么样的存在。 我们都知道，只要有意义，那么就必须慎重考虑。 为什么要玩原神的发生，到底需要如何做到，不为什么要玩原神的发生，又会如何产生。 卡莱尔在不经意间这样说过，过去一切时代的精华尽在书中。我希望诸位也能好好地体会这句话。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 康德曾经说过，既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。我希望诸位也能好好地体会这句话。 我认为。'},
    {id:'2',title:'绝区零太真实了',content:'我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 马克思在不经意间这样说过，一切节省，归根到底都归结为时间的节省。我希望诸位也\n能好好地体会这句话。 一般来讲，我们都必须务必慎重的考虑考虑。 既然如此， 就我个人来说，绝区零太真实了对我的\n意义，不能不说非常重大。 一般来讲，我们都必须务必慎重的考虑考虑。 绝区零太真实了因何而发生?本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 既然如此， 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 现在，解决绝区零太真实了的问题，是非常非常重要的。 所以， 问题的关键究竟为何? 每个人都不得不面对这些问题。 在面对这种问题时， 要想清楚，绝区零太真实了，到底是一种怎么样的存在。 而这些并不是完全重要，更加重要的问题是， 俾斯麦在不经意间这样说过，对于不屈不挠的人来说，没有失败这回事。带着这句话，我们还要更加慎重的审视这个问题： 就我个人来说，绝区零太真实了对我的意义，不能不说非常重大。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。'},
    {id:'3',title:'星穹铁道太好玩了',content:'歌德在不经意间这样说过，读一本好书，就如同和一个高尚的人在交谈。我希望诸位也能好好地体会这句话。 我们一般认为，抓住了问题的关键，\n其他一切则会迎刃而解。 老子在不经意间这样说过，知人者智，自知者明。胜人者有力，自胜者强。我希望诸位也能好好\n地体会这句话。 而这些并不是完全重要，更加重要的问题是， 了解清楚为什么要玩原神到底是一种怎么样的存在，是解决一切问题的关键。 就我个人来说，为什么要玩原神对我的意义，不能不说非常重大。 为什么要玩原神的发生，到底需要如何做到，不为什么要玩原神的发生，又会如何产生。 为什么要玩原神因何而发生?要想清楚，为什么要玩原神，到底是一种怎么样的存在。 我们都知道，只要有意义，那么就必须慎重考虑。 为什么要玩原神的发生，到底需要如何做到，不为什么要玩原神的发生，又会如何产生。 卡莱尔在不经意间这样说过，过去一切时代的精华尽在书中。我希望诸位也能好好地体会这句话。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 康德曾经说过，既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。我希望诸位也能好好地体会这句话。 我认为。'},
  ]);   // 创建响应式引用存储博客数据
  
  onMounted(async () => { //在页面挂载时获取博客数据
    try{
    const response = await axios.get('https://your-api-url.com/blogs');
    blogs.value = response.data;
    }catch(error){
      console.error('获取博客失败',error)
    }
  });

  const people=ref<Person[]>([
    {account:'12345678910',
    id:'顺妃',
    birthday:'1999-09-09',
    sex:'女',
    phone:'12345678901',
    email:'123123123@123.com',
    motto:"我们都知道，只要有意义，那么就必须慎重考虑。 所谓我是顺飞，关键是我是顺飞需要如何写。 我们不得不面对一个非常尴尬的事实，那就是， 鲁巴金在不经意间这样说过，读书是在别人思想的帮助下，建立起自己的思想。带着这句话，我们还要更加慎重的审视这个问题： 既然如此， 一般来说， 一般来讲，我们都必须务必慎重的考虑考虑。 一般来说， 孔子曾经提到过，知之者不如好之者，好之者不如乐之者。这似乎解答了我的疑惑。 在这种困难的抉择下，本人思来想去，寝食难安。 我是顺飞因何而发生？ 每个人都不得不面对这些问题。 在面对这种问题时， 而这些并不是完全重要，更加重要的问题是。",
    from:'北京',
    address:'北京',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
    techs:['vue3','react','angular','typescript','java','c++','python','openGL','maya'],},
    
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
const selectedPeopleAge = calculateAge(selectedPeople.value.birthday);

  onMounted(async () => {
    const response = await axios.get('https://your-api-url.com/people');
    people.value = response.data;
    selectedPeople.value = people.value[0];
  });
</script>

<style>
  .mypage{
    min-height: 86vh;
    width: 98vw;
    background-image: url("../assets/images/background.jpg");
    padding: 1vh;
   
  }
  .page{
    height: auto;
    width: 100vh;
    background-color: rgb(0,0,0,0.2);
    margin: 0 auto;  
    box-shadow: 0px 0px 5px white; 
    padding: 1vh;
    border-radius: 2vh;
  }
  .firstrow{
    display: flex;
    justify-content: space-between;
    background-color: rgb(0,0,0,0.0);
  }
  .uid{
    height: 20vh;
    margin: 1vh 1vh 1vh 1vh;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    width: 25vw;
    border-radius: 2vh;
    box-shadow: 2px 2px 10px black;
    transition: transform 0.5s ease;
  }
  .people{
    margin: 4vh;
  }
  .author-avatar {
    width: 10vh;
    height: 10vh;
    border-radius: 50%; 
    margin:5vh;
    float: left;
    box-shadow: 0px 0px 10px grey 
  }
  .techs{
    height: 20vh;
    margin: 1vh 1vh 1vh 1vh;
    background: rgba(255, 255, 255, 0.2);
	  -webkit-backdrop-filter: blur(10px);
	  backdrop-filter: blur(10px);
    width: 30vw;
    border-radius: 2vh;
    height: 20vh;
    box-shadow: 2px 2px 10px black; 
    transition: transform 0.5s ease;
  }
  .tech{
    margin:1vh 0vh 1vh 2vh ;
    background-color: rgb(0,0,0,0.2);
    padding: 1vh;
    border-radius: 2vh;
    display: inline-block;
    font-size: 2vh;

  }
  .secondrow{
    height: 20vh;
    margin: 1vh 1vh 1vh 1vh;
    background: rgba(255, 255, 255, 0.2);
	  -webkit-backdrop-filter: blur(10px);
	  backdrop-filter: blur(10px);
    width: auto;
    border-radius: 2vh;
    height: auto;
    box-shadow: 2px 2px 10px black;
  }
  .personal-info {
    margin:1vh 0vh 1vh 2vh ;
    background-color: rgb(0,0,0,0.2);
    padding: 1vh;
    border-radius: 2vh;
    display: inline-block;
    font-size: 2vh;
    transition: transform 0.5s ease;
}
.thirdrow{
    height: 20vh;
    margin: 2vh 1vh 1vh 1vh;
    background: rgba(255, 255, 255, 0.2);
	  -webkit-backdrop-filter: blur(10px);
	  backdrop-filter: blur(10px);
    width: auto;
    border-radius: 2vh;
    height: auto;
    padding: 2vh;
    box-shadow: 2px 2px 10px black;
}
.blogs{
    height: 20vh;
    margin: 1vh 1vh 1vh 1vh;
    background: rgba(255, 255, 255, 0.2);
	  -webkit-backdrop-filter: blur(10px);
	  backdrop-filter: blur(10px);
    border:2px solid black;
    border-color: black;
    width: auto;
    border-radius: 2vh;
    height: auto;
    box-shadow: 2px 2px 10px black;
}
.blog{
    margin: 1vh 1vh 1vh 1vh;
    background-color: #D3FADE;
    width: auto;
    border-radius: 2vh;
    height: auto;
    padding: 1vh;
    transition: transform 0.5s ease;
}
.uid:hover {
  transform: scale(1.1) translate(-5%, -5%);/* 放大到原始尺寸的110% */
}
.techs:hover {
  transform: scale(1.1) translate(5%, -5%);/* 放大到原始尺寸的110% */
}
.thirdrow:hover {
  transform: scale(1.1) ;
  transition: transform 0.5s ease;/* 放大到原始尺寸的110% */
}
.secondrow:hover {
  transform: scale(1.1) ;
  transition: transform 0.5s ease;/* 放大到原始尺寸的110% */
}
.blog:hover {
  transform: scale(1.1) ;
  transition: transform 0.5s ease;/* 放大到原始尺寸的110% */
}
</style>