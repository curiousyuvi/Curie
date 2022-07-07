import { AxiosRequestConfig } from "axios";
import { apiInstance } from "../api/axiosInstances";

const getToken = async (code: string): Promise<string | null> => {
  try {
    const requestConfig: AxiosRequestConfig = {
      url: "/auth/token",
      method: "get",
      params: { code },
      responseType: "json",
      withCredentials: true,
    };

    const response = await apiInstance(requestConfig);
    if (response.status === 200) {
      return response.data?.token;
    } else {
      console.error("Error in getToken: ", response.data.error);
      return null;
    }
  } catch (err) {
    console.error("Error in getToken: ", err);
    return null;
  }
};

const refreshToken = async (): Promise<string | null> => {
  try {
    const requestConfig: AxiosRequestConfig = {
      url: "/auth/refresh",
      method: "get",
      responseType: "json",
      withCredentials: true,
    };

    const response = await apiInstance(requestConfig);
    if (response.status === 200) {
      return response.data?.token;
    } else {
      console.error("Error in refreshToken: ", response.data.error);
      return null;
    }
  } catch (err) {
    console.error("Error in refreshToken: ", err);
    return null;
  }
};

const clearRefreshToken = async (): Promise<string | null> => {
  try {
    const requestConfig: AxiosRequestConfig = {
      url: "/auth/clear",
      method: "get",
      responseType: "json",
      withCredentials: true,
    };

    const response = await apiInstance(requestConfig);
    if (response.status === 200 && response.data?.message === "success") {
      return "success";
    } else {
      console.error("Error in logout: ", response.data.error);
      return null;
    }
  } catch (err) {
    console.error("Error in logout: ", err);
    return null;
  }
};

const useToken = () => {
  return { getToken, refreshToken, clearRefreshToken };
};

export default useToken;
