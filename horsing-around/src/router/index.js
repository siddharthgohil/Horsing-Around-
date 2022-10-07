import { createRouter, createWebHistory } from 'vue-router'

import RacingPage from '@/views/Racing.vue'
import JockeyPage from '@/views/Jockey.vue'
import HorsesPage from '@/views/Horses.vue'
import LoginPage from '@/views/Login.vue'

const routes = [
{
    path: '/',  
    name: 'Racing',
    component: RacingPage
},
{
    path: '/horses',
    name: 'Horses',
    component: HorsesPage
},
{
    path: '/jockey',
    name: 'Jockey',
    component: JockeyPage
},
{
    path: '/login',
    name: 'Login',
    component: LoginPage
}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router