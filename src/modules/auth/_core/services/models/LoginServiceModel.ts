import {ILoginRequest} from "../../../models/login/ILoginRequest";

export interface LoginServiceModel {
    login(userData: ILoginRequest): Promise<void>;
}