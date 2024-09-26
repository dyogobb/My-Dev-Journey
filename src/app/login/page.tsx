'use client'
import React, { useEffect, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { EyeSlash, Eye, User, Key } from "@phosphor-icons/react";

import { UserLogin } from "@/services/user";
import { UserAuthContext } from "@/context/userAuth";

import Link from "next/link";

import { LoginInputs } from "@/types/userTypes";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [loginMessage, setLoginMessage] = useState<string | null>()

    const userAuth = useContext(UserAuthContext);

    if (!userAuth) {
        throw new Error("useContext(UserAuthContext) deve ser usado dentro de um UserAuthProvider");
    }

    const { setToken } = userAuth

    const { register, handleSubmit, formState: { }, } = useForm<LoginInputs>()

    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        const response = await UserLogin(data.email, data.password)
        if (response?.status === 200) {
            setToken(response.data.token)
            console.log(response)
        }

        if (response?.status !== 200) {
            setLoginMessage(response?.data.message)
        }
    }

    useEffect(() => {
        if (loginMessage) {
            setTimeout(() => setLoginMessage(null), 5000)
        }
    }, [loginMessage])

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-backgorund">
            <div className="rounded-md flex justify-center overflow-hidden max-w-7xl shadow-lg w-[85%] xl:w-3/4">
                <div className="text-center justify-center items-center flex flex-col gap-4 bg-purple px-20 py-20 w-[65%] xl:w-2/4">
                    <p className="text-3xl font-bold text-white">My Dev Journey</p>
                    <p className="text-white max-w-[420px]">Novo por aqui? Cadastre-se agora e comece a organizar sua jornada de aprendizado!</p>
                    <Link href={'/create-account'}>
                        <button className="text-white border border-white w-fit px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 duration-200 ease-linear">Criar conta</button>
                    </Link>
                </div>
                <div className="bg-white w-2/4 flex flex-col items-center justify-center py-20 gap-6 xl:gap-12">

                    <p className="text-dark-gray text-center max-w-[380px] text-lg max-xl:hidden">Entre na sua conta para registrar sua jornada como desenvolvedor(a).</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4 w-[85%] xl:w-[50%] relative">
                        <div className="flex gap-4 items-center w-full">
                            <User size={32} className="text-gray-500" />
                            <input type="email" {...register("email")} placeholder="Email" className="border border-gray-base rounded-md p-2 outline-none shadow-sm w-[85%]" required />
                        </div>


                        <div className="flex gap-4 items-center w-full">
                            <Key size={32} className="text-gray-500" />
                            <div className="border border-gray-base rounded-md p-2 flex justify-between items-center shadow-sm w-[85%]">
                                <input type={showPassword ? 'text' : 'password'} {...register("password")} placeholder="Senha" className="outline-none w-[80%]" required />
                                <button onClick={() => setShowPassword((prev) => !prev)} type="button">
                                    {showPassword ? <Eye size={20} className="text-gray-500" /> :
                                        <EyeSlash size={20} className="text-gray-500" />
                                    }
                                </button>
                            </div>
                        </div>
                        <button className="bg-purple text-white border w-fit px-6 py-2 rounded-full font-semibold shadow-lg border-white hover:scale-105 duration-200 ease-linear" type="submit">
                            Entrar
                        </button>
                        {loginMessage && <p className="text-center text-red-700 absolute -bottom-14">{loginMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}