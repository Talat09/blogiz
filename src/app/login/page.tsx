import LoginForm from "@/components/LoginForm/LoginForm";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import { Toaster } from "react-hot-toast";

const LoginPage = () => {
  return (
    <>
      <Header />
      <Toaster position="top-center" />
      <div className=" flex items-center justify-center bg-base-200 px-4 py-10">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
