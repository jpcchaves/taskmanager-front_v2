import {apiSlice} from "../app/api/apiSlice";

const tasksApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTasks: builder.query({
            query: () => ({
                url: "/v1/tasks",
            }),
            keepUnusedDataFor: 5,
        })
    })
})

export const {useGetTasksQuery} = tasksApiSlice