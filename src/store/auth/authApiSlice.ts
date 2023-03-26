import {apiSlice} from "../app/api/apiSlice";

export const loginApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: process.env.REACT_APP_API_LOGIN_ENDPOINT,
                method: "POST",
                body: {...credentials},
            })
        })
    }),
})

export const registerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: credentials => ({
                url: process.env.REACT_APP_API_REGISTER_ENDPOINT,
                method: "POST",
                body: {...credentials},
            })
        })
    }),
})

export const {
    useLoginMutation
} = loginApiSlice

export const {
    useRegisterMutation
} = registerApiSlice