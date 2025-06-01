import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className=" flex items-center justify-center bg-base-200 px-4 py-10">
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
