import { UserLoginRequest } from "../../../../../../types/user/login/UserLoginRequest";
import { AxiosResponse } from "axios";
import { UserLoginResponse } from "../../../../../../types/user/login/UserLoginResponse";

export interface AuthService {
  login: (
    data: UserLoginRequest
  ) => Promise<AxiosResponse<UserLoginResponse, UserLoginRequest>>;
}
