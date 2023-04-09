import http from "../../../http-common/http";

export const setDefaultAuthorization = (token: string) => {
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
