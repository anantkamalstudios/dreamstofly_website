import { createContext, useEffect, useState } from "react";
import axios from "axios";

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
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/profile_api`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/logout_api`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res?.data?.status_code === 200) {
      localStorage.removeItem("token");
      setUser(null);
    }
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loadingUser, setUser, fetchProfile, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
