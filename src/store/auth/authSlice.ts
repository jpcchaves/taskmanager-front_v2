import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PayloadSetCredentials extends PayloadAction<AuthState> {
}

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

export interface AuthState {
    user: User,
    accessToken: string
}

const initialState: AuthState = {
    user: null,
    accessToken: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadSetCredentials) => {
            const {user, accessToken} = action.payload;
            state.user = user;
            state.accessToken = accessToken;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null
        }
    }
})

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;

// selectors
export const selectCurrentUser = (state: { auth: { user: User; }; }) => state.auth.user
export const selectCurrentToken = (state: { auth: { accessToken: string; }; }) => state.auth.accessToken;

