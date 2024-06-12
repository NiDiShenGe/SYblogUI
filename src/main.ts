import { createApp } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  App  from "./App.vue";
import router from "./router";
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
//svg插件配置
import 'virtual:svg-icons-register'
app.mount('#app')