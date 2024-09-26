
export interface UserAuthTypes {
    email: string | null,
    setEmail: (email: string | null) => void,
    token: string | null,
    setToken: (token: string | null) => void,
}

export interface CreateUserInput {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    password_confirmation: string,
}