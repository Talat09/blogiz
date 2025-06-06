"use client";
import { useGetBlogsQuery, useDeleteBlogMutation } from "@/redux/api/baseApi";
import { Blog } from "@/type";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsTrash2 } from "react-icons/bs";

const AllBlogsPage = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery("");
  const [deleteBlog] = useDeleteBlogMutation();
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id: string) => {
    setSelectedBlogId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedBlogId) return;
    try {
      await deleteBlog(selectedBlogId).unwrap();
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete blog.");
    } finally {
      setShowModal(false);
    }
  };

  if (isLoading) return <p className="text-white p-4">Loading...</p>;
  console.log("selectedId :", selectedBlogId);
  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="p-4">
        <Toaster position="top-center" />
        <h1 className="text-4xl text-center text-white font-semibold mt-8">
          All Blogs <span className="text-accent">Here!</span>
        </h1>

        <div className="grid grid-cols-1 gap-6 mt-8">
          {blogs?.map((blog: Blog) => (
            <div
              key={blog._id}
              className="relative flex flex-col md:flex-row items-center bg-slate-700 hover:bg-slate-600 transition duration-300 ease-in-out shadow-lg rounded-2xl overflow-hidden"
            >
              {/* Delete Icon */}
              <button
                className="absolute bg-white rounded-full top-3 right-3 text-red-400 hover:text-red-600 z-10 p-2"
                onClick={() => handleDelete(blog._id)}
              >
                <BsTrash2 size={24} />
              </button>

              <Image
                src={blog.blog_image}
                width={400}
                height={250}
                alt="blog-image"
                className="w-full md:w-[400px] h-[250px] object-cover"
              />
              <div className="p-6 text-left w-full">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {blog.title}
                </h3>
                <p className="text-md text-slate-300 line-clamp-3">
                  {blog.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-accent text-white font-semibold rounded hover:bg-opacity-80 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Delete Blog
              </h2>
              <p className="text-gray-600 mb-4">
                Are you sure you want to delete this blog? This action cannot be
                undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogsPage;
