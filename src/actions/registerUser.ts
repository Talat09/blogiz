"use server";

import { RegisterData } from "@/components/RegisterForm/RegisterForm";
const url = process.env.BACKEND_URL;
console.log("Backend URL:", url);
export const registerUser = async (data: RegisterData) => {
  const res = await fetch(`${url}/register`, {
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
