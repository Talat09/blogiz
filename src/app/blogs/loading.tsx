import LoadingCard from "@/components/ui/LoadingCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/type";
import React from "react";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs");
  const blogs = await res.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-10 justify-items-center  ">
      {blogs?.map((blog: Blog) => (
        <LoadingCard key={blog._id} />
      ))}
    </div>
  );
};

export default BlogLoadingPage;
