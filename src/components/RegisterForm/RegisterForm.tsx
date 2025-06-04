"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import googleIcon from "@/assets/google.png";
import githubIcon from "@/assets/github.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { registerUser } from "@/actions/registerUser";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { UserData } from "@/type";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    setIsLoading(true);
    setError("");
    const { name: username, email, confirmPassword: password } = data;
    const registerData = { username, email, password };
    try {
      console.log("Register data:", registerData);
      // TODO: Add actual registration logic here (API call)
      const res = await registerUser(registerData);
      console.log("Response from registration:", res);
      if (res.success) {
        toast.success("Blog created successfully!");

        reset(); // Clear the form
        router.push("/login");
      } else {
        setIsLoading(false);
        console.error("Registration failed:", res.message);
        setError(`Failed to Registration. ${res.message}`);
        toast.error(`Failed to Registration. ${res.message}`);
      }
    } catch (err: any) {
      setIsLoading(false);
      console.error("Error Registration:", err);
      setError(`Failed to Registration. Please try again. ${err.message}`);
      toast.error(`Failed to Registration. Please try again. ${err.message}`);
    }
  };

  return (
    <div className="card w-full max-w-lg bg-base-100 shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h2 className="text-2xl font-bold text-center">Create an account</h2>
        <p className="text-sm text-center text-base-content/70">
          Sign up to get started
        </p>

        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="input input-bordered"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </span>
          )}
        </div>

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

        <div className="form-control">
          <label className="label" htmlFor="confirmPassword">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            className="input input-bordered"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        {error && (
          <div className="alert alert-error text-sm  text-white font-medium mt-4">
            <span>{error}</span>
          </div>
        )}
        <div className="form-control mt-6">
          <button
            className="bg-accent py-2 rounded-lg text-white font-medium hover:bg-black"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </div>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="link link-primary link-hover">
            Log in
          </Link>
        </p>

        <div className="divider">OR</div>

        <div className="flex items-center justify-center gap-4 mt-1">
          <button
            type="button"
            className="btn btn-circle"
            aria-label="Sign up with Google"
          >
            <Image src={googleIcon} width={40} height={40} alt="google icon" />
          </button>

          <button
            type="button"
            className="btn btn-circle"
            aria-label="Sign up with GitHub"
          >
            <Image src={githubIcon} width={40} height={40} alt="github icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
