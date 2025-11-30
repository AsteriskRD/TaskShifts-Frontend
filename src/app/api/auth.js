import API from "./axiosInstance";

export const register = (data) =>
  API.post("/api/users/register", data).catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred during registration");
  });

export const login = (data) =>
  API.post("/api/users/login", data).catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred during login");
  });

export const verifyEmail = (data) =>
  API.post("/api/users/verify-email", data).catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred during email verification");
  });

export const resendVerification = (email) =>
  API.post("/api/users/resend-verification", { email }).catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred while sending verification email");
  });

export const changePassword = (data) =>
  API.post("/api/users/change-password", data).catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred while changing password");
  });

export const forgotPassword = (data) => 
  API.post("/api/users/forgot-password", data).catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred while sending reset link");
  });

export const resetPassword = (token, data) =>
  API.post(`/api/users/reset-password/${token}`, data).catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred while resetting password");
  });

export const logout = () =>
  API.post("/api/users/logout").catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred during logout");
  });

export const completeProfile = (data) =>
  API.post("/api/profile/complete-profile", data).catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred while completing profile");
  });

export const getProfile = () =>
  API.get("/api/profile/get-profile").catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred while fetching profile");
  });

export const updateProfile = (data) =>
  API.post("/api/profile/update-profile", data).catch((error) => {
    throw new Error(error.response?.data?.message || "An error occurred while updating profile");
  });