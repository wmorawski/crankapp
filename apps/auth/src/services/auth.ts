import axios from "axios";


const client: axios.Axios = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const signIn = (payload: {username: string, password: string}): axios.AxiosResponse<{access: string, refresh: string}> => {
    return client.post('api/token/', payload)
}

export const createRedirectUrl = ({access, refresh}: {access: string, refresh: string}) => {
    return `${import.meta.env.VITE_APP_URL}?access=${access}&refresh=${refresh}`
}