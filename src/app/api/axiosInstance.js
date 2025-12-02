import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  withCredentials: true,
});

export default API;