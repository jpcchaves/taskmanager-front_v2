import {createAction} from "redux-actions";
import {LOGIN, REGISTER} from "./actionTypes";

export const login = createAction(LOGIN);
export const register = createAction(REGISTER);
