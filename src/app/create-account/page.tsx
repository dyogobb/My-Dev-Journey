'use client'
import React, { useEffect, useState } from "react"

import { useForm, SubmitHandler } from "react-hook-form"

import { CreateUserInput } from "@/types/userTypes"

import { Eye, EyeSlash } from "@phosphor-icons/react"

import { CreateUser } from "@/services/user"

export default function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConf, setShowPasswordConf] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const { register, handleSubmit, formState: { }, } = useForm<CreateUserInput>()

    const onSubmit: SubmitHandler<CreateUserInput> = async (data) => {
        const response = await CreateUser({ ...data })
        if (response?.status !== 200) {
            setErrorMessage(response?.data.message)
        }
    }

    useEffect(() => {
        if (errorMessage) {
            setTimeout(() => {
                setErrorMessage(undefined)
            }, 5000);
        }
    })

    return (
        <div className="bg-gray-backgorund w-full h-screen flex justify-center items-center">
            <div className="bg-purple px-24 py-20 rounded-md shadow-xl flex flex-col gap-12 items-center relative">
                <div className="text-center flex flex-col gap-4">
                    <p className="text-white text-3xl font-bold">Comece a documentar a sua jornada!</p>
                    <p className="text-white max-w-[480px] text-lg">Crie um histórico completo da sua evolução como desenvolvedor, salvando e organizando suas anotações de desenvolvimento em um só lugar.</p>
                </div>
                <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)} method="post">
                    <div className="flex gap-4 w-full">
                        <input type="text" {...register('first_name')} placeholder="Nome" className="border border-gray-base rounded-md p-2 outline-none w-2/4" />
                        <input type="text" {...register('last_name')} placeholder="Sobrenome" className="border border-gray-base rounded-md p-2 outline-none w-2/4" />
                    </div>
                    <input type="email" {...register('email')} placeholder="Email" className="border border-gray-base rounded-md p-2 outline-none w-full" />
                    <div className="flex gap-4">
                        <div className="border border-gray-base rounded-md p-2 outline-none bg-white flex justify-between items-center">
                            <input type={showPassword ? 'text' : 'password'} {...register('password')} placeholder="Senha" className="w-[85%] outline-none" />
                            <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                                {
                                    showPassword ? <Eye size={20} className="text-gray-500" /> : <EyeSlash size={20} className="text-gray-500" />
                                }
                            </button>
                        </div>
                        <div className="border border-gray-base rounded-md p-2 outline-none bg-white flex justify-between items-center">
                            <input type={showPasswordConf ? 'text' : 'password'} {...register('password_confirmation')} placeholder="Confirmar senha" className="w-[85%] outline-none" />
                            <button type="button" onClick={() => setShowPasswordConf((prev) => !prev)}>
                                {
                                    showPasswordConf ? <Eye size={20} className="text-gray-500" /> : <EyeSlash size={20} className="text-gray-500" />
                                }
                            </button>
                        </div>
                    </div>
                    <button className="border border-white px-6 py-2 w-fit rounded-full text-white font-semibold hover:scale-105 duration-200 ease-linear" type="submit" >Criar conta</button>
                </form>
            </div>
        </div>
    )
}