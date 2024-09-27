'use client'
import { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

import 'dotenv/config';

import { CreateUserInput } from '@/types/userTypes';

export async function UserLogin(email: string, password: string) {

    const response = axios.post(`${process.env.NEXT_PUBLIC_API_DEV}/user/login`, {            
        email: email,
        password: password
    }).then((res: AxiosResponse)=> {
        return {status: res.status, data: res.data.data}
    }).catch((error: AxiosError) => {
        return error.response
    })

    return response
}

export async function CreateUser(data: CreateUserInput) {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_DEV}/user/create`, {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
    }).then((res: AxiosResponse)=> {
        return {status: res.status, data: res.data}
    }).catch((error: AxiosError)=> {
        return error.response
    })

    return response
}