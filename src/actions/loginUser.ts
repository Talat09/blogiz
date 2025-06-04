"use server";

import { LoginUserData } from "@/type";

const url = process.env.BACKEND_URL;
console.log("Backend URL:", url);
export const loginUser = async (data: LoginUserData) => {
  const res = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
