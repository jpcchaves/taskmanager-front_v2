import * as Effects from 'redux-saga/effects'
import {all, takeLatest} from 'redux-saga/effects'
import axios from "axios"
import {User, UserType} from "../../types/user/user";
import {LOGIN, REGISTER} from "../../actions/user/actionTypes";
import {PayloadAction} from "@reduxjs/toolkit";

const call: any = Effects.call;

const login = async (payload: { usernameOrEmail: string, password: string }) => {
    const {data} = await axios.post("http://localhost:8080/api/v1/auth/login", {...payload}, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
    return data;
}

const register = async (payload: { name?: string, username: string, email: string, password: string, confirmPassword: string }) => {
    const {data} = await axios.post("http://localhost:8080/api/v1/auth/register", {...payload}, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })

    return data;
}

function* registerHandler({payload: {data, callback}}: any) {
    try {
        const response: { user: User } = yield call(register, {
            ...data
        })

        if (callback) {
            callback({success: true, data: response.user})
        }

    } catch (e) {
        if (callback) {
            callback({success: false, data: null})
        }
    }
}

function* loginSaga({payload}: PayloadAction<UserType>) {
    try {
        const response: { authResponse: UserType } = yield call(login, {
            ...payload
        })
    } catch (e) {
        console.log(e)
    }
}

function* authSaga() {
    yield all([takeLatest(LOGIN, loginSaga)])
    yield all([takeLatest(REGISTER, registerHandler)])
}

export default authSaga;
