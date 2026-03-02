import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const msg = error?.response?.data?.message || "";
    if (error?.response?.status === 401 || /invalid|expired.*token/i.test(msg)) {
      localStorage.removeItem("token");
      const currentPath = window.location.pathname + window.location.search;
      if (!window.location.pathname.startsWith("/login")) {
        localStorage.setItem("intendedDestination", currentPath);
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
