import axios from "axios";

/**
 * Axios instance
 * --------------
 * Creates a reusable Axios client with a baseURL pointing to the backend authentication routes.
 * This avoids repeating the full URL for every request.
 */
const API = axios.create({
  baseURL: "/api/auth",
});

/**
 * Register user
 * -------------
 * Sends a POST request to /register with formData
 */
export const registerUser = (formData) => API.post("/register", formData);

/**
 * Login user
 * ----------
 * Sends a POST request to /login with formData
 */
export const loginUser = (formData) => API.post("/login", formData);
