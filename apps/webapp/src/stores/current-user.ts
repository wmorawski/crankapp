import {defineStore} from "pinia";
import {inject, Ref, ref} from "vue";
import type {Axios} from "axios";

export const useCurrentUserStore = defineStore('currentUser', () => {
    const axios: Axios = inject('axios')!;
    const isLoggedIn: Ref<boolean | null> = ref(null)
    const data = ref({});
    const fetchCurrentUser = () => {
        return axios.get('user/me')
    }
    const setCurrentUser = (_data: any) => {data.value = _data}
    const setIsLoggedIn = (_isLoggedIn: boolean) => {isLoggedIn.value = _isLoggedIn}
    return {isLoggedIn, data, fetchCurrentUser, setCurrentUser, setIsLoggedIn}
})