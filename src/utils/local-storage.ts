export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  // document.cookie = `token=${accessToken}; path=/; max-age=86400`;
  return localStorage.setItem(key, token);
};
export const getFromLocalStorage = (key: string) => {
  console.log("key: ", key);
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};
