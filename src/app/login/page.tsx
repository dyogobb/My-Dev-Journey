'use client'
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { EyeSlash, Eye } from "@phosphor-icons/react";

type Inputs = {
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
        <div className="w-full h-screen flex justify-center items-center bg-background">
            <div className="border border-gray-base shadow-sm shadow-white rounded-md px-24 py-20 bg-white max-sm:px-4 flex flex-col gap-20 max-w-[500px] max-sm:w-[88%]">
                <div className="text-center flex flex-col gap-2">
                    <hr />
                    <p className="text-3xl font-bold">My Dev Journey</p>
                    <hr />
                    <p>Faça seu login</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <input type="email" {...register("email")} placeholder="Email" className="border border-gray-base rounded-md p-2 outline-none" />
                    <div className="border border-gray-base rounded-md p-2 flex justify-between items-center">
                        <input type="password" {...register("password")} placeholder="Senha" className="outline-none w-[95%]" />
                        <button onClick={() => setShowPassword((prev) => !prev)} type="button">
                            {showPassword ? <Eye size={20} className="text-gray-500" /> :
                                <EyeSlash size={20} className="text-gray-500" />
                            }
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}