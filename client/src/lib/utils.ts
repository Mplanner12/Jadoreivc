import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default axiosInstance;
