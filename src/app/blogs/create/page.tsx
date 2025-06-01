import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import CreateBlogForm from "@/components/ui/BlogForm";
import React from "react";
import { Toaster } from "react-hot-toast";

const CreateBlogPage = () => {
  return (
    <div>
      <Header />
      <div className="px-4">
        <Toaster position="top-center" />
        <h1 className="text-4xl text-center mt-5 font-semibold">
          Create Your Blogs <span className="text-accent">Here!</span>
        </h1>
        <CreateBlogForm />
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlogPage;
