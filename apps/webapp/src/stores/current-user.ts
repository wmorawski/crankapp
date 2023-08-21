import {defineStore} from "pinia";
import {inject, Ref, ref} from "vue";
import type {Axios} from "axios";

export const useCurrentUserStore = defineStore('currentUser', () => {
    const axios: Axios = inject('axios')!;
    const isLoggedIn: Ref<boolean | null> = ref(null)
    const fetchCurrentUser = axios.get('user/me')
    return {isLoggedIn, fetchCurrentUser}
})