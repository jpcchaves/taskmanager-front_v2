import { UserLoginRequest } from "../../../../../types/user/login/UserLoginRequest";
import { AxiosResponse } from "axios";
import { UserLoginResponse } from "../../../../../types/user/login/UserLoginResponse";
import { UserRegisterRequest } from "../../../../../types/user/register/UserRegisterRequest";
import { UserRegisterResponse } from "../../../../../types/user/register/UserRegisterResponse";

export interface AuthService {
  login: (
    data: UserLoginRequest
  ) => Promise<AxiosResponse<UserLoginResponse, UserLoginRequest>>;

  register: (
    data: UserRegisterRequest
  ) => Promise<AxiosResponse<UserRegisterResponse, UserRegisterRequest>>;
}
