import CreateBlogForm from "@/components/ui/BlogForm";
import React from "react";
import { Toaster } from "react-hot-toast";

const CreateBlogsPage = () => {
  return (
    <div className="bg-slate-800 h-screen">
      <div className="p-4">
        <Toaster position="top-center" />
        <h1 className="text-4xl text-center text-white  font-semibold">
          Create Your Blogs <span className="text-accent">Here!</span>
        </h1>
        <CreateBlogForm />
      </div>
    </div>
  );
};

export default CreateBlogsPage;
