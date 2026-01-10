import { createContext, useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoadingUser(false);
      return;
    }

    try {
      const res = await axiosInstance.get("/users/profile_api");
      setUser(res?.data?.data);
      console.log(res?.data?.data?.user);
    } catch (err) {
      console.log("Invalid token, removing...");
      localStorage.removeItem("token");
      setUser(null);
    }

    setLoadingUser(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    const res = await axiosInstance.post("/users/logout_api", {});
    if (res?.data?.status_code === 200) {
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loadingUser, setUser, fetchProfile, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
