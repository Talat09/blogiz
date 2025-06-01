import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
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
  const res = await fetch("http://localhost:5000/api/v1/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    id: blog._id.toString(),
  }));
};
const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  // console.log("BlogDetailsPage params:", params);
  const res = await fetch(`http://localhost:5000/api/v1/blogs/${params.id}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div>
      <Header />
      <div className="w-[90%] mx-auto my-10 p-4 md:p-10">
        <BlogDetails blog={blog} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
