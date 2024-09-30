'use client'
import React, { useContext } from "react";
import { UserAuthContext } from "@/context/userAuth";

import { useRouter } from "next/router";

export default function HomePage() {

    const userAuth = useContext(UserAuthContext)

    if (!userAuth) {
        throw new Error("useContext(UserAuthContext) deve ser usado dentro de um UserAuthProvider");
    }

    const { token } = userAuth

    const router = useRouter()

    if (!token) {
        router.push('/login')
    }

    return (
        <div>
            <p>home</p>
        </div>
    )
}