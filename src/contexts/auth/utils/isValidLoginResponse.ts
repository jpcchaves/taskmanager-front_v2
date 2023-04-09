import { ILoginResponse } from "../../../modules/auth/models/login/ILoginResponse";

export const isValidLoginResponse = (args: ILoginResponse): boolean => {
  return !!(args.user && args.tokenType && args.accessToken);
};
