import {BaseQueryApi, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import authSlice, {setCredentials, logout, AuthState} from "../../auth/authSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {RootState} from "../../store";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_API_BASE_URL,
    credentials: "include",
    prepareHeaders: (headers: Headers, {getState}) => {
        const token = (getState() as RootState).auth.accessToken
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers;
    }
})

const baseQueryAuth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    let result = await baseQuery(args, api, extraOptions);

    if(result.data) {
        const user = (api.getState() as RootState).auth.user;
        const accessToken = (api.getState() as RootState).auth.accessToken;

        api.dispatch(setCredentials({user, accessToken}));
    } else {
        api.dispatch(logout())
    }

    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryAuth,
    endpoints: builder => ({})
})


