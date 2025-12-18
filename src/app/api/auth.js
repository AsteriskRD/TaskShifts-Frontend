import httpClient from "./axiosInstance";

export const register = async (data) => {
  try {
    const response = await httpClient.post("users/register", data);
    return response;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "An error occurred during registration"
    );
  }
};

export const login = async (data) => {
  try {
    const responseLog = await httpClient.post(`/users/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return responseLog;
  } catch (error) {
    if (error.response) {
      console.error(
        " Login API error:",
        error.response.status,
        error.response.data
      );
    } else {
      console.error(" Login API request error:", error.message);
    }
    throw error;
  }
};

export const verifyEmailLink = async ({email, verificationCode}) => {
  try {
    const verifyResponse = await httpClient.post("/users/verify-email", {email, verificationCode});
    return verifyResponse.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "An error occurred during email verification, Please retry!"
    );
  }
};
export const resendVerification = (email) =>
  httpClient
    .post("/api/users/resend-verification", { email })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while sending verification email"
      );
    });

export const changePassword = (data) =>
  httpClient.post("/api/users/change-password", data).catch((error) => {
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while changing password"
    );
  });

export const forgotPassword = async (data) => {
  try {
    const responseForgot = await httpClient.post(
      `/users/forgot-password`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return responseForgot;
  } catch (error) {
    if (error.response) {
      console.error(
        " Login API error:",
        error.response.status,
        error.response.data
      );
    } else {
      console.error(" Login API request error:", error.message);
    }
    throw error;
  }
};

export const resetPassword = async (token, data) => {
  try {
    const resReset = await httpClient.post(
      `/users/reset-password/${token}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return resReset;
  } catch (error) {
    if (error.response) {
      console.error(
        " Login API error:",
        error.response.status,
        error.response.data
      );
    } else {
      console.error(" Login API request error:", error.message);
    }
    throw error;
  }
};

export const logout = async () => {
  try {
    const resLogout = await httpClient.post(`/users/logout`);
    return resLogout;
  } catch (error) {
    if (error.response) {
      console.error(
        " Login API error:",
        error.response.status,
        error.response.data
      );
    } else {
      console.error(" Login API request error:", error.message);
    }
    throw error;
  }
};

export const completeProfile = (data) =>
  httpClient.post("/api/profile/complete-profile", data).catch((error) => {
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while completing profile"
    );
  });

export const getProfile = async (token) => {
  try {
    const res = await httpClient.get(`/profile/get-profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

export const updateProfile = (data) =>
  httpClient.post("/api/profile/update-profile", data).catch((error) => {
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while updating profile"
    );
  });
