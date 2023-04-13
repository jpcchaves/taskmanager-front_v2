import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { User } from "../../../types/user/User";
import AuthService from "../../../modules/auth/_core/services/impl/AuthServiceImpl";
import { AuthContext } from "../context/AuthContext";
import { UserLoginRequest } from "../../../types/user/login/UserLoginRequest";
import Toast, { ToastStatus } from "../../../factories/toast/makeToastFactory";
import { SessionStorageUtils } from "../../../utils/SessionStorageUtils";
import { isValidLoginResponse } from "../utils/isValidLoginResponse";
import { UserRegisterRequest } from "../../../types/user/register/UserRegisterRequest";
import { setDefaultAuthorization } from "../utils/setDefaultAuthorization";
import { UserUpdateRequest } from "../../../types";
import { FormikValues } from "formik";

interface IProps {
  children: JSX.Element;
}

const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);

  const navigate = useNavigate();

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
        "Usuário autenticado com sucesso",
        "Você será redirecionado para o dashboard",
        ToastStatus.success,
        3000,
        "top-right",
        true
      );

      if (data.remember) {
        SessionStorageUtils.saveUserAndToken(res);
        setRemember(true);
      } else {
        setRemember(false);
        sessionStorage.removeItem("user");
        SessionStorageUtils.saveToken("accessToken", res.accessToken);
      }

      if (isValidLoginResponse(res)) {
        setUser(res.user);

        setDefaultAuthorization(res?.accessToken);

        navigate("/tarefas");
        return true;
      } else {
        return false;
      }
    } catch (e: any) {
      makeToast(
        "Ocorreu um erro!",
        e?.response?.data?.message ||
          "Ocorreu um erro inesperado! Por favor, tente novamente",
        ToastStatus.error,
        3000,
        "top-right",
        true
      );
      toggleLoading();
      // console.log(e);
    }
  };

  const register = async (data: UserRegisterRequest) => {
    toggleLoading();

    await AuthService.register(data)
      .then(() => {
        toggleLoading();
        makeToast(
          "Usuário criado com sucesso!",
          "Você será redirecionado para a tela de login",
          ToastStatus.success,
          3000,
          "top-right",
          true
        );

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((e) => {
        toggleLoading();
        makeToast(
          "Ocorreu um erro!",
          e?.response?.data?.message ||
            "Ocorreu um erro inesperado! Por favor, tente novamente",
          ToastStatus.error,
          3000,
          "top-right",
          true
        );
      });
    return true;
  };

  const update = async (data: UserUpdateRequest, validation: FormikValues) => {
    toggleLoading();
    try {
      const { data: res } = await AuthService.update(data);

      const updatedUser = {
        id: user.id,
        name: data.name,
        username: user.username,
        email: user.email,
      };

      setUser(updatedUser);

      if (remember) {
        sessionStorage.setItem("user", JSON.stringify(updatedUser));
      }

      makeToast(
        "Usuário atualizado com sucesso",
        `${res?.message}` || "",
        ToastStatus.success,
        3000,
        "top-right",
        true
      );

      validation.resetForm({
        values: {
          name: data.name,
          password: "",
          confirmPassword: "",
        },
      });
      toggleLoading();
    } catch (e: any) {
      makeToast(
        "Ocorreu um erro!",
        e?.response?.data?.message ||
          "Ocorreu um erro inesperado! Por favor, tente novamente",
        ToastStatus.error,
        3000,
        "top-right",
        true
      );
      // console.log(e);
      toggleLoading();
    }
  };

  const logout = (navigate: NavigateFunction) => {
    if (remember) {
      sessionStorage.removeItem("accessToken");
    } else {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("accessToken");
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, register, update, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
