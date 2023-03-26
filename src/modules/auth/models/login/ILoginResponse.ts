import {IUserRegisterResponse} from "../register/IUserRegisterResponse";

export interface ILoginResponse {
    user: IUserRegisterResponse,
    accessToken: string,
    tokenType: string
}