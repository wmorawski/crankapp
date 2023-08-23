import './style.css'
import type { App } from 'vue';
import CrButton from "./CrButton.vue";
import CrAvatar from "./CrAvatar.vue";

export default {
    install: (app: App) => {
        app.component('CrButton', CrButton);
        app.component('CrAvatar', CrAvatar);
    }
};

export { CrButton, CrAvatar };