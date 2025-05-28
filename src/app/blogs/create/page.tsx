import CreateBlogForm from "@/components/ui/BlogForm";
import React from "react";
import { Toaster } from "react-hot-toast";

const CreateBlogPage = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <h1 className="text-4xl text-center mt-5 font-semibold">
        Create Your Blogs <span className="text-accent">Here!</span>
      </h1>
      <CreateBlogForm />
    </div>
  );
};

export default CreateBlogPage;
