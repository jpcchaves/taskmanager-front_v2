export type UserLoginRequest = {
    usernameOrEmail: string,
    password: string,
    remember?: boolean
}