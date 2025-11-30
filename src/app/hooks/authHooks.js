import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  login,
  register,
  forgotPassword,
  resetPassword,
  verifyEmail,
  logout,
  changePassword,
  completeProfile,
  updateProfile,
} from "../api/auth";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { setUser } = useContext(AuthContext);

  return useMutation({
    mutationFn: (credentials) => login(credentials),
    onSuccess: (response) => {
      const userData = response?.data?.user || response?.data?.data;
      setUser(userData);
      queryClient.setQueryData(["currentUser"], userData);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (data) => register(data),
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data) => forgotPassword(data), 
  });
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (data) => verifyEmail(data), 
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: ({ token, password }) => resetPassword(token, { password }),
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (data) => changePassword(data), 
  });
};

export const useCompleteProfile = () => {
  const queryClient = useQueryClient();
  const { setUser } = useContext(AuthContext);

  return useMutation({
    mutationFn: (data) => completeProfile(data),
    onSuccess: (response) => {
      const userData = response?.data;
      setUser(userData);
      queryClient.setQueryData(["currentUser"], userData);
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { setUser } = useContext(AuthContext);

  return useMutation({
    mutationFn: (data) => updateProfile(data),
    onSuccess: (response) => {
      const userData = response?.data;
      setUser(userData);
      queryClient.setQueryData(["currentUser"], userData);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { setUser } = useContext(AuthContext);

  return useMutation({
    mutationFn: async () => {
      await logout();
    },
    onSuccess: () => {
      setUser(null); 
      queryClient.setQueryData(["currentUser"], null);
      queryClient.clear(); 
    },
  });
};