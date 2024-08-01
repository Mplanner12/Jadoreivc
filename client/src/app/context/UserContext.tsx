"use client";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

interface UserContextFunctions {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  register: (userDetails: any) => Promise<void>;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextFunctions | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/users",
    withCredentials: true,
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the current user
    const fetchUser = async () => {
      try {
        const { data } = await axiosInstance.get("/auth/currentUser");
        setUser(data.user);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      setUser(data.user);
    } catch (error) {
      alert("Login failed");
      console.error("Login failed", error);
    }
  };

  const register = async (userDetails: any) => {
    try {
      const { data } = await axiosInstance.post("/auth/register", userDetails);
      setUser(data.user);
    } catch (error) {
      alert("Registration failed");
      console.error("Registration failed", error);
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
