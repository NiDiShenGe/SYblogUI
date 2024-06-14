import { createRouter,createWebHistory } from "vue-router";

import Page1 from "@/pages/page1.vue";
import Page2 from "@/pages/page2.vue";
import Page3 from "@/pages/page3.vue";
import Login from "@/pages/login/login.vue";
import Sign_in from "@/pages/login/sign_in.vue";
import Sign_up from "@/pages/login/sign_up.vue";

const router =createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'page1'
        },
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
        },
        {
            name:'loginPage',
            path:'/loginpage',
            component:Login,
            children:[
                {
                    name:'signIn',
                    path:'signin',
                    component:Sign_in
                },
                {
                    name:'signUp',
                    path:'signup',
                    component:Sign_up
                },
            ]
        }
    ]
})

export default router