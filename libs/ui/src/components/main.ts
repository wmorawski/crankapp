import './style.css'
import type { App } from 'vue';
import Button from "./CrButton.vue";

export default {
    install: (app: App) => {
        app.component('Button', Button);
    }
};

export { Button };