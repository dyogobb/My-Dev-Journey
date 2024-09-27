'use client'
import React, { useState } from "react"
import { useRouter } from "next/navigation"

import { useForm, SubmitHandler } from "react-hook-form"

import { CreateUserInput } from "@/types/userTypes"

import { Eye, EyeSlash, CheckCircle } from "@phosphor-icons/react"

import { CreateUser } from "@/services/user"

export default function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConf, setShowPasswordConf] = useState(false)
    const [succesMessage, setSuccessMessage] = useState<boolean>(false)

    const router = useRouter()

    const { register, handleSubmit, formState: { }, reset } = useForm<CreateUserInput>()

    const onSubmit: SubmitHandler<CreateUserInput> = async (data) => {
        const response = await CreateUser({ ...data })
        if (response?.status !== 200) {
            return console.log(response?.data)
        }

        setSuccessMessage(true)
        setTimeout(() => {
            reset()
            setSuccessMessage(false)
            router.push('/login')
        }, 3000)
    }

    // useEffect(() => {
    //     if (errorMessage) {
    //         setTimeout(() => {
    //             setErrorMessage(undefined)
    //         }, 5000);
    //     }
    // })

    return (
        <div className="bg-gray-backgorund max-md:bg-purple w-full h-screen flex justify-center items-center">
            <div className="bg-purple px-24 py-20 max-md:px-7 max-md:py-6 rounded-md md:shadow-xl flex flex-col gap-12 items-center relative max-lg:w-[95%]">
                <div className="text-center flex flex-col gap-4">
                    <p className="text-white text-3xl font-bold">Comece a documentar a sua jornada!</p>
                    <p className="text-white max-w-[480px] text-lg">Crie um histórico completo da sua evolução como desenvolvedor, salvando e organizando suas anotações de desenvolvimento em um só lugar.</p>
                </div>
                <form className="flex flex-col gap-12 items-center" onSubmit={handleSubmit(onSubmit)} method="post">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 w-full max-md:flex-col">
                            <input type="text" {...register('first_name')} placeholder="Nome" className="border border-gray-base rounded-md p-2 outline-none w-2/4 max-md:w-full" />
                            <input type="text" {...register('last_name')} placeholder="Sobrenome" className="border border-gray-base rounded-md p-2 outline-none w-2/4 max-md:w-full" />
                        </div>
                        <input type="email" {...register('email')} placeholder="Email" className="border border-gray-base rounded-md p-2 outline-none w-full" />
                        <div className="flex max-md:flex-col gap-4">
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
                    </div>
                    <button className="border border-white px-6 py-2 w-fit rounded-full text-white font-semibold hover:scale-105 duration-200 ease-linear" type="submit" >Criar conta</button>
                </form>
            </div>
            {succesMessage && (
                <div className="w-full h-screen blur-modal">
                    <div className="bg-white rounded-md flex flex-col items-center justify-center px-20 py-16 gap-4">
                        <CheckCircle size={100} className="text-green-600" />
                        <p className="text-center text-xl font-semibold">Usuário cadastrado com sucesso!</p>
                        <p className="text-center text-lg">Redirecionando para a tela de login.</p>
                    </div>
                </div>
            )}
        </div>
    )
}