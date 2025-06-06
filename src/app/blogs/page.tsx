"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/type";
import React from "react";

const BlogsPage = () => {
  const { data: blogs } = useGetBlogsQuery("");

  return (
    <>
      <Header />
      <div className="w-[90%]  mx-auto my-10 p-4   md:p-10">
        <h1 className="text-4xl text-center my-5 font-semibold">
          All Blogs From <span className="text-accent">Blogiz!</span>
        </h1>
        <p className="text-xl text-center text-gray-400 md:w-2/4 mx-auto">
          <i>
            Discover insightful articles on cutting-edge technologies, emerging
            trends, and thought-provoking ideas. Stay informed and inspired with
            the latest from the world of innovation.
          </i>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-10 justify-items-center  ">
          {blogs?.map((blog: Blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;
