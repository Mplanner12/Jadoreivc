import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000",
//   // baseURL: "https://jadoreivc-backend.vercel.app",
//   withCredentials: true,
// });
const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export const getUser = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};
export const getUserRole = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userRole");
  }
  return null;
};

export default axiosInstance;
