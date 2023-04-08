import {createContext} from 'react';
import {User} from "../../../types/user/User";
import {UserLoginRequest} from "../../../types/user/login/UserLoginRequest";

export type AuthContextType = {
    user: User | null;
    login: (data: UserLoginRequest) => Promise<boolean>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null);