"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import googleIcon from "@/assets/google.png";
import githubIcon from "@/assets/github.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { LoginUserData } from "@/type";
import { loginUser } from "@/actions/loginUser";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { setAccessToken } from "@/utils/setAccessToken";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginUserData>();

  const onSubmit = async (data: LoginUserData) => {
    setIsLoading(true);
    setError("");

    // try {
    //   // TODO: Add actual registration logic here (API call)
    //   const res = await loginUser(data);

    //   if (res?.accessToken && res?.success) {
    //     toast.success("Login successfully!");
    //     // localStorage.setItem("accessToken", res.accessToken);

    //     setAccessToken({ accessToken: res.accessToken });
    //     reset();
    //     router.push("/dashboard");
    //   } else {
    //     setIsLoading(false);
    //     console.error("Login failed:", res.message);
    //     setError(`Failed to Login. ${res.message}`);
    //     toast.error(`Failed to Login. ${res.message}`);
    //   }
    // } catch (err: any) {
    //   setIsLoading(false);
    //   console.error("Error Login:", err);
    //   setError(`Failed to Login. Please try again. ${err.message}`);
    //   toast.error(`Failed to Login. Please try again. ${err.message}`);
    // }
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "/dashboard",
    });

    if (res?.ok && res.url) {
      toast.success("Login successful!");
      router.push(res.url);
    } else {
      toast.error("Invalid credentials!");
      setError("Invalid email or password.");
      setIsLoading(false);
    }
  };

  return (
    <div className="card w-full max-w-lg bg-base-100 shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h2 className="text-2xl font-bold text-center">Welcome back</h2>
        <p className="text-sm text-center text-base-content/70">
          Enter your credentials to access your account
        </p>

        {error && (
          <div className="alert alert-error text-sm mt-4">
            <span>{error}</span>
          </div>
        )}

        <div className="form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="input input-bordered"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label" htmlFor="password">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered w-full pr-10"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex justify-end mt-2">
          <Link href="/forgot-password" className="text-sm link link-hover">
            Forgot password?
          </Link>
        </div>

        <div className="form-control mt-6">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Login..." : "Login"}
          </button>
        </div>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="link link-primary link-hover">
            Sign up
          </Link>
        </p>
        <div className="divider">OR</div>
        <div className="flex items-center justify-center gap-4 mt-1">
          <button
            type="button"
            className="btn  btn-circle"
            aria-label="Sign in with Google"
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
          >
            <Image src={googleIcon} width={40} height={40} alt="google icon" />
          </button>

          <button
            type="button"
            className="btn  btn-circle"
            aria-label="Sign in with GitHub"
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
          >
            <Image src={githubIcon} width={40} height={40} alt="github icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
