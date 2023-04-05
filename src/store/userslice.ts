import {UserType} from './types/user/user'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: UserType = {
    userDetails: null,
    accessToken: null,
    tokenType: null
};

export const userslice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthenticationToken: (state = initialState, {payload}: PayloadAction<any>) => {
            return {
                ...state,
                accessToken: payload
            }
        },
        loginAction: (state = initialState, {payload}: PayloadAction<any>) => {
            return {
                ...state,
                userDetails: payload
            }
        }
    }
})

