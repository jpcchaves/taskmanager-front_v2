import {AuthState} from "../../../../store/auth/authSlice";
import {makeItems} from "../../_core/factories/sessionStorage/makeItemsFactory";

export interface IItems {
    key: string,
    value: string
}

export class SessionStorageUtils {

    readonly makeItems: (userData: AuthState) => IItems[]

    constructor() {
    }

    public static saveToken(key: string, value: string) {
        sessionStorage.setItem(key, value);
    }

    public static saveUserAndToken(userData: AuthState) {
        makeItems(userData).map(item =>
            sessionStorage.setItem(item.key, item.value)
        )
    }

    public static getItem(key: string) {
        return JSON.parse(sessionStorage.getItem(key))
    }
}