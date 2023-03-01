import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import jobs from '@/views/jobs/jobs.vue'
import jobsdetails from '@/views/jobs/jobdetails.vue'
import jobsdetails from '@/views/ErrorPage/error404.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
        
          path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: jobs
        },
        {
            path: '/jobs/:id',
            name: 'jobsdetails',
            component: jobsdetails
        },
        // redirect
        {
            path: 'all-jobs',
            redirect: 'jobs'
        },
        // catchall 404 
        {
            path: '/:catchAll(.*)',
            name: 'Notfound',
            component: notfound
        },
        
    ],
    

    
})





createApp(App).use(router).mount('#app')
