'use client'
import { createContext, ReactNode, useState } from "react"
import { UserAuthTypes } from "@/types/userTypes"

export const UserAuthContext = createContext<UserAuthTypes | undefined>(undefined)

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {

    const [token, setToken] = useState<string | null>('')
    const [email, setEmail] = useState<string | null>('')

    return (
        <UserAuthContext.Provider value={{ token, setToken, email, setEmail }}>
            {children}
        </UserAuthContext.Provider>
    )
}
