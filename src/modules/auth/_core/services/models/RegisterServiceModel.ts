import {IUserRegisterRequest} from "../../../models/register/IUserRegisterRequest";

export interface RegisterServiceModel {
    register(user: IUserRegisterRequest): Promise<void>;

}