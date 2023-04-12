import { transformUsernameOrNameToUppercase } from "./transformUsernameOrNameToUppercase";

export const trimUsernameOrName = (nameOrUsername: string) => {
  return transformUsernameOrNameToUppercase(
    nameOrUsername.slice(0, 2).toUpperCase()
  );
};
