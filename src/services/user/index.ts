'use client'
import { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';
import 'dotenv/config';

export async function UserLogin(email: string, password: string) {

    const response = axios.post(`${process.env.NEXT_PUBLIC_API_DEV}/user/login`, {            
        email: email,
        password: password
    }).then((res: AxiosResponse)=> {
        return res.data
    }).catch((error: AxiosError) => {
        return error.response
    })

    return response
}