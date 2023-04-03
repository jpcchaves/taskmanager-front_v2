import {apiSlice} from "../app/api/apiSlice";

const tasksApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTasks: builder.query({
            query: () => ({
                url: "/v1/tasks",
                method: "GET"
            }),
            keepUnusedDataFor: 5,
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: "/v1/tasks",
                method: "POST",
                body: task
            })
        }),
        updateTask: builder.mutation({
            query: ({task, id}) => ({
                url: `/v1/tasks/${id}`,
                method: 'PUT',
                body: task
            })
        }),
        deleteTask: builder.mutation({
            query: ({id}) => ({
                url: `/todos/${id}`,
                method: "DELETE",
                body: id
            })
        })
    })
})

export const {useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation} = tasksApiSlice