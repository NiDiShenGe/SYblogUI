import { createRouter,createWebHistory } from "vue-router";

import Page1 from "@/pages/page1.vue";
import Page2 from "@/pages/page2.vue";
import Page3 from "@/pages/page3.vue";

const router =createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'firstPage',
            path:'/page1',
            component:Page1
        },
        {
            name:'secondPage',
            path:'/page2',
            component:Page2
        },
        {
            name:'thirdPage',
            path:'/page3',
            component:Page3
        }
    ]
})

export default router