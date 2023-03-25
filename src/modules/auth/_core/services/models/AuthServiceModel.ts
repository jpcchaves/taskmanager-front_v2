import {IUserRegisterRequest} from "../../../models/IUserRegisterRequest";

export interface AuthServiceModel {
    register(user: IUserRegisterRequest): Promise<void>;

}