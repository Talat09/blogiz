import { authKey } from "@/constants/authkey";
import { getFromLocalStorage } from "./local-storage";
import { decodedToken } from "./jwt";

export const getAccessToken = () => {
  const authToken = getFromLocalStorage(authKey);
  console.log("local storage token :", authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    console.log("decoded Data :", decodedData);
    return { ...decodedData };
  }
};
