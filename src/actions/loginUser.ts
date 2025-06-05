"use server";

import { cookies } from "next/headers";
import { LoginUserData } from "@/type";

const url = process.env.BACKEND_URL;

export const loginUser = async (data: LoginUserData) => {
  const res = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    // You can customize error handling here
    const errorData = await res.json().catch(() => null);
    return {
      success: false,
      message: errorData?.message || "Login failed",
    };
  }

  const userInfo = await res.json();

  return userInfo;
};
