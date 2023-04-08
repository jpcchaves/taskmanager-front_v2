import http from "../../http-common/http";
import {UserLoginRequest} from "../../types/user/login/UserLoginRequest";
import {UserLoginResponse} from "../../types/user/login/UserLoginResponse";

class AuthService {
    login(data: UserLoginRequest): Promise<UserLoginResponse> {
        return http.post<UserLoginResponse, UserLoginResponse>(import.meta.env.VITE_API_LOGIN_ENDPOINT, data);
    }
}

export default new AuthService();
