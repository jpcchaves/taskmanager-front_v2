import http from "../../../../../../http-common/http";
import { AxiosResponse } from "axios";
import { UserLoginRequest } from "../../../../../../types/user/login/UserLoginRequest";
import { UserLoginResponse } from "../../../../../../types/user/login/UserLoginResponse";
import { AuthService } from "../models/AuthService";

class AuthServiceImpl implements AuthService {
  login(
    data: UserLoginRequest
  ): Promise<AxiosResponse<UserLoginResponse, UserLoginRequest>> {
    return http.post<UserLoginResponse>(
      import.meta.env.VITE_API_LOGIN_ENDPOINT,
      data
    );
  }
}

export default new AuthServiceImpl();
