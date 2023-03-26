import {IUserRegisterRequest} from "../../../models/register/IUserRegisterRequest";

export interface AuthServiceModel {
    register(user: IUserRegisterRequest): Promise<void>;

}