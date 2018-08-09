import Dashboard from './views/Dashboard.vue'
import Parent from './views/Parent.vue'

export default [
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: requireAuth,
        children: [
            {
                path: '/',
                redirect: '/dashboard/home'
            },
            {
                path: 'home',
                component: () => import('./views/dashboard/dashboard/Home.vue')
            },
            {
                path: '*',
                redirect: '/dashboard'
            },
        ]
    }

]

function requireAuth (to, from, next) {
    if (window.User) {
        return next()
    } else {
        return next('/dashboard/login')
    }
}
