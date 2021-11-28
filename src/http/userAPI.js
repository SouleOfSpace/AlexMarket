import {$authHost, $host} from "./index";
import axios from "axios";

export const registration = async (email, password) => {
    console.log(`Email2: ${email}\nPassword2${password}`)
    const response = await $host.post(`api/user/registration`, {email, password, role: "ADMIN"})
    console.log(`data:  ${response}`)
    return response
    // await axios({
    //     method: 'post',
    //     protocol: 'http',
    //     host: 'localhost',
    //     port: 3000,
    //     // baseURL: process.env.REACT_APP_API_URL,
    //     url: 'api/userr/registration',
    //     data: {
    //         email: email,
    //         password: password,
    //         role: 'ADMIN'
    //     }
    // }).then(res => {console.log(`RES@2;  ${res}`)})
}

export const login = async (email, password) => {
    const response = await $host.post('api/user/login', {email, password})
    return response
}

export const check = async () => {
    const response = await $authHost.post('api/user/auth')
    return response
}