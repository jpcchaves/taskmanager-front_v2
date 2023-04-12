import { AxiosResponse } from "axios";
import {
  UserLoginRequest,
  UserLoginResponse,
  UserRegisterRequest,
  UserRegisterResponse,
  UserUpdateRequest,
} from "../../../../../types";
import { UpdateUseResponse } from "../impl/AuthServiceImpl";

export interface AuthService {
  login: (
    data: UserLoginRequest
  ) => Promise<AxiosResponse<UserLoginResponse, UserLoginRequest>>;

  register: (
    data: UserRegisterRequest
  ) => Promise<AxiosResponse<UserRegisterResponse, UserRegisterRequest>>;

  update: (
    data: UserUpdateRequest
  ) => Promise<AxiosResponse<UpdateUseResponse>>;
}
