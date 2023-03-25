export interface IUserRegisterRequest {
    name: string,
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    remember?: boolean
}