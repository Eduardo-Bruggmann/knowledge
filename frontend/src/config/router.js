import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
// import ArticleAdmin from '@/components/admin/ArticleAdmin'
// import CategoryAdmin from '@/components/admin/CategoryAdmin'
// import UserAdmin from '@/components/admin/UserAdmin'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'
import AuthComponent from '@/components/auth/Auth'

import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: HomeComponent
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: true }
},// {
//     path: '/articles-admin',
//     component: ArticleAdmin
// }, {
//     path: '/categories-admin',
//     component: CategoryAdmin
// }, {
//     path: '/users-admin',
//     component: UserAdmin
// 
{
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}, {
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
}, {
    name: 'auth',
    path: '/auth',
    component: AuthComponent
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if (to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router 