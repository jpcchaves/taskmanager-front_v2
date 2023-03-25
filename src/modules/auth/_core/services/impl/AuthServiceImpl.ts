import {NavigateFunction} from "react-router/dist/lib/hooks";
import {Dispatch} from "@reduxjs/toolkit";
import {AuthServiceModel} from "../models/AuthServiceModel";
import {IUserRegisterRequest} from "../../../models/IUserRegisterRequest";
import {IUserRegisterResponse} from "../../../models/IUserRegisterResponse";

export class AuthServiceImpl implements AuthServiceModel {
    readonly dispatch: Dispatch;
    private navigate: NavigateFunction

    constructor(navigate: NavigateFunction) {
        this.navigate = navigate;
    }

    register(user: IUserRegisterRequest): IUserRegisterResponse {
        return undefined;
    }

}