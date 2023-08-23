import {createApp, inject} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import {createRouter, createWebHistory} from "vue-router";
import DashboardPage from "./pages/DashboardPage.vue";
import {useCurrentUserStore} from "./stores/current-user";
import VueAxios from "vue-axios";
import axios from "axios";
import Axios from "./plugins/axios";


const routes = [
    {
        path: "/",
        component: DashboardPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
const pinia = createPinia()
const app = createApp(App)
app.use(router);
app.use(pinia)
app.use(VueAxios, axios)
app.use(Axios, {baseUrl: import.meta.env.VITE_API_URL})
app.provide('axios', app.config.globalProperties.$axios)

router.beforeEach(async (to) => {
    const currentUser = useCurrentUserStore(pinia)
    if(currentUser.isLoggedIn === null) {
        if('access' in to.query && 'refresh' in to.query) {
            localStorage.setItem('access', <string>to.query.access)
            localStorage.setItem('refresh', <string>to.query.refresh)
            app.config.globalProperties.$axios.defaults.headers['Authorization'] = `Bearer ${to.query.access}`;
        }
        try {
            const apiUser = (await currentUser.fetchCurrentUser()).data
            currentUser.setIsLoggedIn(true);
            currentUser.setCurrentUser(apiUser);
            router.push('/')
        } catch (e) {
            if(!to.meta.isPublic) window.location = import.meta.env.VITE_AUTH_URL
        }
    }
})

app.mount('#app')
