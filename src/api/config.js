export const API_BASE_URL = "https://dreamstofly.com/dreamstofly_backend";

import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export async function apiGet(endpoint, params = {}, config = {}) {
  try {
    const response = await axios.get(`${baseURL}${endpoint}`, {
      params,
      ...config,
    });

    return response;
  } catch (error) {
    console.error("API GET Error:", error);
    throw error;
  }
}

export const parseFeatures = (html) => {
  if (!html) return [];

  const div = document.createElement("div");
  div.innerHTML = html;

  return Array.from(div.querySelectorAll("li")).map((li) =>
    li.textContent.trim()
  );
};
