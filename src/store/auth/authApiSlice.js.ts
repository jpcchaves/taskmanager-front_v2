import { apiSlice} from "../app/api/apiSlice";

export const authApiSliceJs = apiSlice.injectEndpoints({
    endpoints: build => ({
        login: build.mutation({
            query: credentials => ({
                url: "/v1/auth/login",
                method: 'POST',
                body: {...credentials}
            })
        })
    }),
})

export const {
    useLoginMutation
} = authApiSliceJs