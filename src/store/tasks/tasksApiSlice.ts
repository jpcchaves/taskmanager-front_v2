import {apiSlice} from "../app/api/apiSlice";

const tasksApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTasks: builder.query({
            query: () => ({
                url: "/v1/tasks?size=50",
                method: "GET"
            }),
            providesTags: ['Tasks'],
            keepUnusedDataFor: 5,
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: "/v1/tasks",
                method: "POST",
                body: task
            }),
            invalidatesTags: ["Tasks"]
        }),
        updateTask: builder.mutation({
            query: ({task, id}) => ({
                url: `/v1/tasks/${id}`,
                method: 'PUT',
                body: task
            }),
            invalidatesTags: ["Tasks"]
        }),
        deleteTask: builder.mutation({
            query: ({id}) => ({
                url: `/todos/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["Tasks"]
        })
    })
})

export const {useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation} = tasksApiSlice