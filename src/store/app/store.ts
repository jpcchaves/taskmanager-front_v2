import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../auth/authSlice";
import {apiSlice} from "./api/apiSlice";
// ...

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer ,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
    devTools:   true
})

export type RootState = ReturnType<typeof store.getState>
