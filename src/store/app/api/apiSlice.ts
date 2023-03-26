import {BaseQueryApi, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {logout, setCredentials} from "../../auth/authSlice";
import {RootState} from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    mode: "cors",
    credentials: "same-origin",
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.accessToken
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
            headers.set("Content-Type", "application/json")

        }
        return headers;
    }
})

const baseQueryWithAuth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result?.data) {
        const user = (api.getState() as RootState).auth.user;
        const accessToken = (api.getState() as RootState).auth.accessToken;

        api.dispatch(setCredentials({user, accessToken}));

    } else {
        api.dispatch(logout())
    }

    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithAuth,
    endpoints: builder => ({})
})


