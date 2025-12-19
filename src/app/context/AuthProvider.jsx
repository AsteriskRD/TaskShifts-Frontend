'use client';

import { useState, createContext, useContext } from "react";
import * as authAPI from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signupRequested, setSignupRequested] = useState(false);
  const [resetRequested, setResetRequested] = useState(false);
  const [resetVerified, setResetVerified] = useState(false);

  const login = async (credentials) => {
    const res = await authAPI.login(credentials);
    const userData = res?.data?.user || res?.data?.data;
    setUser(userData);
    return userData;
  };

  const register = async (data) => {
    const res = await authAPI.register(data);
    const userData = res?.data?.data;
    setSignupRequested(true);
    return userData;
  };

  const verifyEmail = async (data) => {
    const res = await authAPI.verifyEmail(data);
    const userData = res?.data?.data;
    setUser(userData);
    setSignupRequested(false);
    return userData;
  };

  const resendVerification = async (email) => {
    const res = await authAPI.resendVerification(email);
    return res.data;
  };

  const forgotPassword = async (data) => {
    const res = await authAPI.forgotPassword(data);
    setResetRequested(true);
    return res.data;
  };

  const resetPassword = async (token, data) => {
    const res = await authAPI.resetPassword(token, data);
    setResetRequested(false);
    setResetVerified(false);
    return res.data;
  };

  const changePassword = async (data) => {
    const res = await authAPI.changePassword(data);
    return res.data;
  };

  const completeProfile = async (data) => {
    const res = await authAPI.completeProfile(data);
    const userData = res?.data;
    setUser(userData);
    return userData;
  };

  const getProfile = async () => {
    const res = await authAPI.getProfile();
    const userData = res?.data?.user || res?.data?.data;
    setUser(userData);
    return userData;
  };

  const updateProfile = async (data) => {
    const res = await authAPI.updateProfile(data);
    const userData = res?.data;
    setUser(userData);
    return userData;
  };

  const logout = async () => {
    await authAPI.logout();
    setUser(null);
    setSignupRequested(false);
    setResetRequested(false);
    setResetVerified(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signupRequested,
        resetRequested,
        resetVerified,
        setUser,
        setSignupRequested,
        setResetRequested,
        setResetVerified,
        login,
        register,
        verifyEmail,
        resendVerification,
        forgotPassword,
        resetPassword,
        changePassword,
        logout,
        completeProfile,
        getProfile,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};