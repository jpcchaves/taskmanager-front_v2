import {IUserRegisterRequest} from "../../../models/IUserRegisterRequest";
import {IUserRegisterResponse} from "../../../models/IUserRegisterResponse";

export interface AuthServiceModel {
    register(user: IUserRegisterRequest): IUserRegisterResponse;

}