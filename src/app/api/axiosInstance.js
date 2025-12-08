import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  
});

console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
export default httpClient;
