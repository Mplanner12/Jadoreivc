"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useForm } from "react-hook-form"; // Import React Hook Form
import { useUser } from "../context/UserContext";
import { useRouter } from "next/router";

const Page = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(); // Initialize React Hook Form

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.id);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: any) => {
    try {
      const response = await login(data.email, data.password);
      router.push("/");
      console.log(response);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="bg-emerald-600 w-full h-full flex justify-center md:justify-between">
      <div className="bg-white w-full h-full flex flex-col justify-center items-center pt-[2rem] px-[2.35rem] md:px-[5.8rem] pb-[8rem]">
        <div className="h-full mb-[1.85rem] md:mb-[4.5rem] w-full flex justify-center items-center">
          <h1 className="w-full h-full text-start text-emerald-600 text-[1.3rem] font-[500]">
            Jadoreivc
          </h1>
        </div>
        <div className="w-full py-[1rem] pb-2 px-[0.25rem] flex justify-center items-center">
          <h1 className="w-full text-start ml-[0.25rem] text-teal-950 text-[1.25rem] md:text-[1.5rem] font-semibold">
            Login to your Account
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-none border-0"
          >
            <div className="w-full flex justify-between gap-3 py-[0.75rem] mb-[0.5rem] pr-[1rem] md:pr-0 items-center">
              <div className="shadow-sm w-fit gap-x-[1rem] flex justify-start items-center py-[1.2rem] px-[1rem] rounded-[0.5rem] border-2 active:border-emerald-600 hover:border-emerald-600 ">
                <input
                  style={{ transform: "scale(1.5)" }}
                  type="radio"
                  name="role"
                  id="tourist"
                  className={`w-fit mr-1 ${
                    selectedRole === "tourist" ? "bg-emerald-600" : ""
                  }`}
                  checked={selectedRole === "tourist"}
                  onChange={handleRoleChange}
                />
                <label
                  htmlFor="tourist"
                  className={`w-[5rem] md:w-[12.85rem] text-gray-700 text-[0.75rem] md:text-[0.85rem]`}
                >
                  As a Tourist
                </label>
              </div>
              <div className="shadow-sm w-fit gap-x-[1rem] flex justify-start items-center py-[1.2rem] px-[1rem] rounded-[0.5rem] border-2 active:border-emerald-600 hover:border-emerald-600 ">
                <input
                  style={{ transform: "scale(1.5)" }}
                  type="radio"
                  name="role"
                  id="guide"
                  className={`w-fit mr-1 ${
                    selectedRole === "guide" ? "bg-emerald-600" : ""
                  }`}
                  checked={selectedRole === "guide"}
                  onChange={handleRoleChange}
                />
                <label
                  htmlFor="guide"
                  className={`w-[5.75rem] md:w-[12.85rem] text-gray-700 text-[0.75rem] md:text-[0.85rem]`}
                >
                  As a Tour Guide
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-y-[0.85rem]">
              <div className="w-full h-fit flex flex-col justify-between">
                <label
                  className="py-[0.35rem] text-[0.8rem] text-gray-600"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="p-[0.7rem] shadow-sm rounded-lg border-2 hover:border-emerald-600 active:border-emerald-600 outline-emerald-600 text-[0.85rem]"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {/* Extract the error message from the FieldError object */}
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {`${errors.email.message}`}
                  </p>
                )}
              </div>
              <div className="w-full h-fit flex flex-col justify-between">
                <label
                  className="py-[0.35rem] text-[0.8rem] text-gray-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="p-[0.7rem] shadow-sm rounded-lg border-2 hover:border-emerald-600 active:border-emerald-600 outline-emerald-600 text-[0.85rem]"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {`${errors.password.message}`}
                  </p>
                )}
                <span
                  className="relative top-[-1.5rem] flex justify-end w-full h-full right-4 -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <LuEye size={32} className="h-6 w-6 text-gray-500" />
                  ) : (
                    <LuEyeOff size={32} className="h-6 w-6 text-gray-500" />
                  )}
                </span>
              </div>
              <div className={`w-full h-full mt-[1.2rem]`}>
                <input
                  disabled={isSubmitting}
                  type="submit"
                  value="LOGIN"
                  className="w-full h-full p-[0.75rem] font-[500] text-[1.1rem] text-center bg-orange-400 rounded-full text-white"
                />
                <div className="mt-[1.9rem] flex justify-center items-center">
                  <Link href={"/signUp"}>
                    <p className="text-[0.75rem]">
                      Dont have an account?
                      <span className="text-emerald-600 font-[500]">
                        Sign Up
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        id="green"
        className="hidden md:flex w-full h-full bg-inherit fill-emerald-600"
      ></div>
    </div>
  );
};

export default Page;
