import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import SignInPage from "./pages/SignInPage/SignInPage.vue";
import SignUpPage from "./pages/SignUpPage/SignUpPage.vue";
import { plugin as formkitPlugin, defaultConfig as formkitConfig } from '@formkit/vue'
import myFormkitConfig from '../formkit.config'
import Axios from './plugins/axios'


const history = createWebHistory();
const routes = [
    {
        path: "/",
        component: SignInPage
    },
    {
        path: "/customers",
        component: SignUpPage
    },
];
const router = createRouter({
    history,
    routes
});

const app = createApp(App)

app.use(Axios, {baseUrl: import.meta.env.VITE_API_URL})
app.provide('axios', app.config.globalProperties.$axios)

app.use(router)
app.use(formkitPlugin, formkitConfig(myFormkitConfig))

app.mount('#app')
