import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import SignInPage from "./pages/SignInPage/SignInPage.vue";
import SignUpPage from "./pages/SignUpPage/SignUpPage.vue";

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

app.use(router)

app.mount('#app')
