import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HomePage,
        meta: {
            title: 'Mary Iglesias Escribana - Inicio'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to) => {
    if (to.meta?.title) {
        document.title = to.meta.title
    }
})

export default router
