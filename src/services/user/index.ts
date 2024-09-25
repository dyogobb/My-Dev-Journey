import { AxiosError } from 'axios';
// import axios from 'axios';
import 'dotenv/config';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const axios = require('axios').default;

export async function UserLogin(email: string, password: string) {
    console.log('AQUIIIII')
    console.log('env: ', process.env.DEFAULT_ROUTE)
    console.log(email)
    axios.post(`${process.env.DEFAULT_ROUTE}user/login`, {            
        email: email,
        password: password
    }).then(function (response) {
        console.log(response)
    }).catch(function (error: AxiosError) {
        if (error.response) {
            return error.response.data
        }
    })
}