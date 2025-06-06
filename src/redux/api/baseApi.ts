import { decodedToken } from "@/utils/jwt";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
// Define a service using a base URL and expected endpoints
interface MyTokenPayload {
  email?: string;
  // add other expected fields here if needed
}

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    prepareHeaders: async (headers) => {
      const session = await getSession(); // Get session from NextAuth
      console.log("session :", session);
      const token: string | undefined = session?.accessToken;
      // Decode token only if it's defined
      const user = token ? (decodedToken(token) as MyTokenPayload) : null;
      console.log("User from token:", user);
      if (user?.email && (session as any)?.token) {
        headers.set("Authorization", `Bearer ${(session as any)?.token}`);
      }
      return headers;
    },
  }),

  endpoints: (build) => ({
    getBlogs: build.query({
      query: () => `/api/v1/blogs`,
    }),
    deleteBlog: build.mutation({
      query: (id: string) => ({
        url: `/api/v1/blogs/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlogsQuery, useDeleteBlogMutation } = baseApi;
