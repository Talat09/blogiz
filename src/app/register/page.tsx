import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";
import { Toaster } from "react-hot-toast";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <Toaster position="top-center" />
      <div className=" flex items-center justify-center bg-base-200 px-4 py-10">
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
