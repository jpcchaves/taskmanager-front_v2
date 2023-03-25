import {apiSlice} from "../app/api/apiSlice";

export const loginApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: "/v1/auth/login",
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
                url: "/v1/auth/register",
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