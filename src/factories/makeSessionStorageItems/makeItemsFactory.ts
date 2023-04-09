import { IItems } from "../../utils/SessionStorageUtils";

export const makeItems = ({ user, accessToken }: any): IItems[] => {
  return [
    {
      key: "accessToken",
      value: accessToken,
    },
    {
      key: "user",
      value: JSON.stringify(user),
    },
  ];
};
