import React, {useState} from 'react';
import {User} from "../../types/user/User";
import AuthService from "../../services/auth/AuthService";
import {AuthContext} from "./AuthContext";
import {ILoginResponse} from "../../modules/auth/models/login/ILoginResponse";
import {UserLoginRequest} from "../../types/user/login/UserLoginRequest";
import {UserLoginResponse} from "../../types/user/login/UserLoginResponse";

interface IProps {
    children: JSX.Element
}

const AuthProvider = ({children}: IProps) => {
    const [user, setUser] = useState<User | null>(null);

    const isValidLoginResponse = (args: ILoginResponse): boolean => {
        return !!(args.user && args.tokenType && args.accessToken);
    }

    const login = async (data: UserLoginRequest) => {
        const res: UserLoginResponse = await AuthService.login(data);

        if (isValidLoginResponse(res)) {
            setUser(res.user)
            return true;
        } else {
            return false;
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
    }


    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;