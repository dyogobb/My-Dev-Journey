'use client'
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { EyeSlash, Eye, User, Key } from "@phosphor-icons/react";
import { UserLogin } from "@/services/user";

interface Inputs {
    email: string,
    password: string,
}

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('aqui')
        UserLogin(data.email, data.password)
        console.log(data)

    }

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-backgorund">
            <div className="rounded-md flex justify-center overflow-hidden max-w-7xl shadow-lg w-[85%] xl:w-3/4">
                <div className="text-center justify-center items-center flex flex-col gap-4 bg-purple px-20 py-20 w-[65%] xl:w-2/4">
                    <p className="text-3xl font-bold text-white">My Dev Journey</p>
                    <p className="text-white max-w-[420px]">Novo por aqui? Cadastre-se agora e comece a organizar sua jornada de aprendizado!</p>
                    <button className="text-white border border-white w-fit px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 duration-200 ease-linear">Criar conta</button>
                </div>
                <div className="bg-white w-2/4 flex flex-col items-center justify-center py-20 gap-6 xl:gap-12">

                    <p className="text-dark-gray text-center max-w-[380px] text-lg max-xl:hidden">Entre na sua conta e continue evoluindo como desenvolvedor(a), revisando e anotando novos conceitos.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[85%] xl:w-[50%]">
                        <div className="flex gap-4 items-center">
                            <User size={32} className="text-gray-500" />
                            <input type="email" {...register("email")} placeholder="Email" className="border border-gray-base rounded-md p-2 outline-none w-full shadow-sm" />
                            {errors.email && <span>O email é obrigatório</span>}
                        </div>


                        <div className="flex gap-4 items-center">
                            <Key size={32} className="text-gray-500" />
                            <div className="border border-gray-base rounded-md p-2 flex justify-between items-center w-full shadow-sm">
                                <input type="password" {...register("password")} placeholder="Senha" className="outline-none w-[80%]" />
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
                    </form>
                </div>
            </div>
        </div>
    )
}