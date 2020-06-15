import axios from "axios";

import constants from "@config/constants";

const getToken = () => {
  const token = localStorage.getItem(constants.LOCAL_TOKEN_KEY);
  if (!token) throw new Error("Token does not exist.");
  return token;
};

export const publicAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const privateAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
privateAPI.interceptors.request.use(
  function (config) {
    // 헤더에 토큰 설정
    const token = getToken();
    config.headers.Authorization = token;

    return config;
  },
  function (error) {
    console.log("error", error);
    // sendErrorMessage(error);

    return Promise.reject(error);
  }
);
