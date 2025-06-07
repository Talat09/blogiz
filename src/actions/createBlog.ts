// actions/createBlog.ts
"use server";

import { ApiResponse, Blog } from "@/type";

// import { Blog } from "@/types/blog";
// import { ApiResponse } from "@/types/api";

export const createBlog = async (
  data: Omit<Blog, "_id" | "total_likes">
): Promise<ApiResponse<Blog>> => {
  const res = await fetch("https://blogiz-backend.vercel.app/api/v1/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include", // if you rely on cookies / JWT
    cache: "no-store",
  });

  const payload = (await res.json()) as ApiResponse<Blog>;

  // If the transport-level status was 2xx but the payload says success:false
  if (!res.ok || !payload.success) {
    // Normalise the error so caller can throw/catch
    const msg = payload.success ? res.statusText : payload.message;
    throw new Error(msg || "Unknown error");
  }

  return payload;
};
