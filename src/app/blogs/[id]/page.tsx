import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/type";
import React from "react";

interface BlogDetailsPageProps {
  params: {
    id: string;
  };
}
//this function generates  for the first 3 blogs which will be used for static generation
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    id: blog.id.toString(),
  }));
};
const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.id}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div className="w-[90%] mx-auto my-10 p-4 md:p-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
