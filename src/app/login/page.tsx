import LoginForm from "@/components/LoginForm/LoginForm";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className=" flex items-center justify-center bg-base-200 px-4 py-10">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
