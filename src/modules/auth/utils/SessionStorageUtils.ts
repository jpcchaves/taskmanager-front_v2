import {AuthState} from "../../../store/auth/authSlice";
import {makeItems} from "../_core/factories/makeItemsFactory";

export interface IItems {
    key: string,
    value: string
}

export class SessionStorageUtils {

    readonly makeItems: (userData: AuthState) => IItems[]

    constructor() {
    }

    public static saveItem(key: string, value: string) {
        sessionStorage.setItem(key, value);
    }

    public static saveItems(userData: AuthState) {
        makeItems(userData).map(item =>
            sessionStorage.setItem(item.key, item.value)
        )


    }

}