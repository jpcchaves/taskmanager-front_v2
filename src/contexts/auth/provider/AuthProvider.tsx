import React, {useState} from 'react';
import {User} from "../../../types/user/User";
import AuthService from "../../../services/auth/AuthService";
import {AuthContext} from "../context/AuthContext";
import {ILoginResponse} from "../../../modules/auth/models/login/ILoginResponse";
import {UserLoginRequest} from "../../../types/user/login/UserLoginRequest";
import {SessionStorageUtils} from "../../../modules/auth/utils/cache/SessionStorageUtils";
import Toast, {ToastStatus} from "../../../modules/auth/_core/factories/toast/makeToastFactory";

interface IProps {
    children: JSX.Element
}

const AuthProvider = ({children}: IProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [makeToast] = Toast();

    const isValidLoginResponse = (args: ILoginResponse): boolean => {
        return !!(args.user && args.tokenType && args.accessToken);
    }

    const login = async (data: UserLoginRequest) => {
        setIsLoading(true);
        const valuesToSubmit = {
            usernameOrEmail: data.usernameOrEmail,
            password: data.password
        }

        try {
            const {data: res} = await AuthService.login(valuesToSubmit);

            setIsLoading(false)
            makeToast("Usuário autenticado com sucesso!",
                "Você será redirecionado para o dashboard",
                ToastStatus.success,
                3000, "top-right",
                true)

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
        } catch (e) {
            setIsLoading(false);
            console.log(e)
        }

    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
    }


    return (
        <AuthContext.Provider value={{user, isLoading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;