import { createContext } from "react";
import { User } from "../../../types/user/User";
import { UserLoginRequest } from "../../../types/user/login/UserLoginRequest";
import { UserRegisterRequest } from "../../../types/user/register/UserRegisterRequest";
import { NavigateFunction } from "react-router-dom";

export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (data: UserLoginRequest) => Promise<boolean>;
  register: (data: UserRegisterRequest) => Promise<boolean>;
  logout: (navigate: NavigateFunction) => void;
};

export const AuthContext = createContext<AuthContextType>(null);
