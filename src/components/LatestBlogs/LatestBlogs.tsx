import { Blog } from "@/type";
import Image from "next/image";
import React from "react";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  console.log("Blogs:", blogs);
  return (
    <div className="w-[90%]  mx-auto my-10">
      <h1 className="text-4xl text-center my-5 font-semibold">
        Latest Blogs From <span className="text-accent">Blogiz!</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Explore groundbreaking ideas, technological breakthroughs, and expert
          insights. From quantum computing to the latest in innovation —
          discover it all here.
        </i>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-10 justify-items-center p-4   md:p-10 ">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog._id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-10 justify-items-center p-4   md:p-10 ">
        {blogs.slice(3).map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
