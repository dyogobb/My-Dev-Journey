'use client'
import React from "react"

import { useForm, SubmitHandler } from "react-hook-form"
import { CreateUserInput } from "@/types/userTypes"

export default function CreateAccount() {
    const { register, handleSubmit, formState: { }, } = useForm<CreateUserInput>()

    const onSubmit: SubmitHandler<CreateUserInput> = async (data) => {
        console.log(data)
    }


    return (
        <div className="bg-gray-backgorund w-full h-screen flex justify-center items-center">
            <div className="bg-purple px-24 py-20 rounded-md shadow-xl flex flex-col gap-12 items-center">
                <div className="text-center flex flex-col gap-4">
                    <p className="text-white text-3xl font-bold">Comece a documentar a sua jornada!</p>
                    <p className="text-white max-w-[480px] text-lg">Crie um histórico completo da sua evolução como desenvolvedor, salvando e organizando suas anotações de desenvolvimento em um só lugar.</p>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-4">
                        <input type="text" {...register('first_name')} placeholder="Nome" className="border border-gray-base rounded-md p-2 outline-none" />
                        <input type="text" {...register('last_name')} placeholder="Sobrenome" className="border border-gray-base rounded-md p-2 outline-none" />
                    </div>
                    <input type="email" {...register('email')} placeholder="Email" className="border border-gray-base rounded-md p-2 outline-none" />
                    <div className="flex gap-4">
                        <input type="password" {...register('password')} placeholder="Senha" className="border border-gray-base rounded-md p-2 outline-none" />
                        <input type="password" {...register('password_confirmation')} placeholder="Confirmar senha" className="border border-gray-base rounded-md p-2 outline-none" />
                    </div>
                </form>
            </div>
        </div>
    )
}