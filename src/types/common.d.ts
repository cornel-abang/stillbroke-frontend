export type RegisterUserInputs = {
    first_name: string
    last_name: string
    email: string
    password: string
    password_confirmation: string
}

export type LoginUserInputs = {
    email: string
    password: string
}