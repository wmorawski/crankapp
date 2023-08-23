import axios from 'axios'
import type {App} from 'vue'

interface AxiosOptions {
    baseUrl?: string
    token?: string
}

export default {
    install: (app: App, options: AxiosOptions) => {
        const access = localStorage.getItem('access')
        app.config.globalProperties.$axios = axios.create({
            baseURL: options.baseUrl,
            headers: {
                ...(access ? {'Authorization': `Bearer ${access}`}: {})
            }
        })
    }
}