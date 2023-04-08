import {User} from "../User";

export type UserLoginResponse = {
    accessToken: string,
    tokenType: string,
    user: User
}