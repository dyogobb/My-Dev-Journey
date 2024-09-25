'use client'
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { EyeSlash, Eye, User, Key } from "@phosphor-icons/react";

interface Inputs {
    email: string,
    password: string,
}

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-backgorund">
            <div className="shadow-sm rounded-md flex justify-center overflow-hidden max-w-7xl">
                <div className="text-center justify-center flex flex-col gap-2 bg-purple px-20 py-20 w-2/4">
                    <p className="text-3xl font-bold text-white">My Dev Journey</p>
                    <p className="text-white max-w-[420px]">Novo por aqui? Cadastre-se agora e comece a organizar sua jornada de aprendizado!</p>
                </div>
                <div className="bg-white w-2/4 flex flex-col items-center justify-center py-20 gap-4">

                    <p className="text-dark-gray text-center max-w-[420px]">Entre na sua conta e continue evoluindo como desenvolvedor(a), revisando e anotando novos conceitos.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[70%]">
                        <div className="flex gap-4 items-center">
                            <User size={32} className="text-gray-500" />
                            <input type="email" {...register("email")} placeholder="Email" className="border border-gray-base rounded-md p-2 outline-none w-full" />
                        </div>


                        <div className="flex gap-4">
                            <Key size={32} className="text-gray-500" />
                            <div className="border border-gray-base rounded-md p-2 flex justify-between items-center w-full">
                                <input type="password" {...register("password")} placeholder="Senha" className="outline-none w-[80%]" />
                                <button onClick={() => setShowPassword((prev) => !prev)} type="button">
                                    {showPassword ? <Eye size={20} className="text-gray-500" /> :
                                        <EyeSlash size={20} className="text-gray-500" />
                                    }
                                </button>
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}