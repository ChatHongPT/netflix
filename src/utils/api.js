import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const authenticateUser = async (email, password) => {
  try {
    // TMDB API 호출 (예시)
    const response = await axios.post(`${TMDB_BASE_URL}/authentication/token/new`, {
      api_key: API_KEY,
      email,
      password,
    });
    return response.data.success;
  } catch (error) {
    console.error("Authentication failed:", error);
    return false;
  }
};

export const saveCredentials = (email, password) => {
  localStorage.setItem("credentials", JSON.stringify({ email, password }));
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("credentials");
};
