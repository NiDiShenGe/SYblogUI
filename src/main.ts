import { createApp } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  App  from "./App.vue";
import router from "./router";
import 'virtual:svg-icons-register';
import mitt from 'mitt';
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
//svg插件配置

app.mount('#app')