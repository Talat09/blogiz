"use server";

import { Blog } from "@/type";

export const createBlog = async (data: Blog) => {
  const response = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store", // Ensure the latest data is fetched
  });
  const newCreatedBlog = await response.json();
  return newCreatedBlog;
};
