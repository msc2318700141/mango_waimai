import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Merchant from '../pages/Merchant/Merchant.vue'
import Meal from '../pages/Meal/Meal.vue'
import Evaluate from '../pages/Evaluate/Evaluate.vue'
import Business from '../pages/Business/Business.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login,
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/merchant',
            component:Merchant,
            children:[
                {
                    path:'meal',
                    component:Meal
                },
                {
                    path:'evaluate',
                    component:Evaluate
                },
                {
                    path:'business',
                    component:Business
                },
            ]
        },
    ]
})