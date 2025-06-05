import { authKey } from "@/constants/authkey";
import { setToLocalStorage } from "./local-storage";

export const setAccessToken = ({ accessToken }: { accessToken: string }) => {
  console.log("set access token: ", accessToken);
  return setToLocalStorage(authKey, accessToken);
};
