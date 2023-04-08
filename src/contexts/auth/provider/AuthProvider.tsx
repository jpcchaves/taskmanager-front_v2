import React, {useState} from 'react';
import {User} from "../../../types/user/User";
import AuthService from "../../../services/auth/AuthService";
import {AuthContext} from "../context/AuthContext";
import {ILoginResponse} from "../../../modules/auth/models/login/ILoginResponse";
import {UserLoginRequest} from "../../../types/user/login/UserLoginRequest";
import {SessionStorageUtils} from "../../../modules/auth/utils/cache/SessionStorageUtils";

interface IProps {
    children: JSX.Element
}

const AuthProvider = ({children}: IProps) => {
    const [user, setUser] = useState<User | null>(null);

    const isValidLoginResponse = (args: ILoginResponse): boolean => {
        return !!(args.user && args.tokenType && args.accessToken);
    }

    const login = async (data: UserLoginRequest) => {

        const valuesToSubmit = {
            usernameOrEmail: data.usernameOrEmail,
            password: data.password
        }
        const {data: res} = await AuthService.login(valuesToSubmit);

        if (data.remember) {
            SessionStorageUtils.saveUserAndToken(res);
        } else {
            SessionStorageUtils.saveToken("accessToken", res.accessToken);
        }

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