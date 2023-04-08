import React, { useState } from "react";
import { User } from "../../../types/user/User";
import AuthService from "../../../modules/auth/_core/services/auth/impl/AuthServiceImpl";
import { AuthContext } from "../context/AuthContext";
import { UserLoginRequest } from "../../../types/user/login/UserLoginRequest";
import Toast, { ToastStatus } from "../../../factories/toast/makeToastFactory";
import { SessionStorageUtils } from "../../../utils/SessionStorageUtils";
import { isValidLoginResponse } from "../utils/isValidLoginResponse";
import { UserRegisterRequest } from "../../../types/user/register/UserRegisterRequest";

interface IProps {
  children: JSX.Element;
}

const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [makeToast] = Toast();

  const toggleLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  const login = async (data: UserLoginRequest): Promise<boolean> => {
    toggleLoading();
    const valuesToSubmit = {
      usernameOrEmail: data.usernameOrEmail,
      password: data.password,
    };

    try {
      const { data: res } = await AuthService.login(valuesToSubmit);

      toggleLoading();
      makeToast(
        "Usuário autenticado com sucesso!",
        "Você será redirecionado para o dashboard",
        ToastStatus.success,
        3000,
        "top-right",
        true
      );

      if (data.remember) {
        SessionStorageUtils.saveUserAndToken(res);
      } else {
        SessionStorageUtils.saveToken("accessToken", res.accessToken);
      }

      if (isValidLoginResponse(res)) {
        setUser(res.user);
        return true;
      } else {
        return false;
      }
    } catch (e: any) {
      makeToast(
        "Ocorreu um erro!",
        e?.response?.data?.message ||
          "Ocorreu um erro inesperado! Por favor, tente novamente.",
        ToastStatus.error,
        3000,
        "top-right",
        true
      );
      toggleLoading();
      // console.log(e);
    }
  };

  const register = (data: UserRegisterRequest) => {
    toggleLoading();
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
