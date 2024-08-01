"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { register: registerUser } = useUser();

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.id);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: any) => {
    try {
      await registerUser(data);
      router.push("/");
      console.log(data);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="bg-emerald-600 w-full h-full flex justify-center md:justify-between">
      <div className="bg-white w-full h-full flex flex-col justify-center items-center pt-[1.5rem] px-[2.35rem] md:px-[5.85rem] pb-[7rem]">
        <div className="h-full mb-[1.85rem] md:mb-[3.5rem] w-full flex justify-center items-center">
          <h1 className="w-full h-full text-start text-emerald-600 text-[1.3rem] font-[500]">
            Jadoreivc
          </h1>
        </div>
        <div className="w-full py-[1.75rem] px-[0.25rem] flex justify-center items-center">
          <h1 className="w-full text-start ml-[0.25rem] text-teal-950 text-[1.3rem] md:text-[1.75rem] font-semibold">
            Create your account
          </h1>
        </div>
        <div className="w-full flex justify-center items-center mt-[-1rem]">
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
                  className={`w-fit mr-1 p-0${
                    selectedRole === "tourist" ? "border-emerald-600" : ""
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
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <input
                  className="p-[0.7rem] shadow-sm rounded-lg border-2 hover:border-emerald-600 active:border-emerald-600 outline-emerald-600 text-[0.85rem]"
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {`${errors.fullName.message}`}
                  </p>
                )}
              </div>
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
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {`${errors.email.message}`}
                  </p>
                )}
              </div>
              <div className="w-full h-fit flex flex-col justify-between relative">
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
                  className="absolute right-4 top-[70%] -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <LuEye size={32} className="h-6 w-6 text-gray-500" />
                  ) : (
                    <LuEyeOff size={32} className="h-6 w-6 text-gray-500" />
                  )}
                </span>
              </div>
              <div className="w-full h-full mt-[1.5rem]">
                <input
                  disabled={isSubmitting}
                  type="submit"
                  value="CREATE ACCOUNT"
                  className={`w-full h-full p-[0.75rem] font-[500] text-[1.1rem] text-center bg-orange-400 rounded-full text-white ${
                    isSubmitting && "opacity-50 cursor-not-allowed bg-gray-500"
                  }`}
                />
                <div className="mt-[1.75rem] flex justify-center items-center">
                  <Link href={"/logIn"}>
                    <p className="text-[0.75rem]">
                      Already have an account?{" "}
                      <span className="text-emerald-600 font-[500]">Login</span>
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
