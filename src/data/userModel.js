import axios from "axios";

// 회원가입
async function join(data) {
  const url = "/api/auth/join";
  const requestPayload = {
    email: data.email,
    password: data.realpassword,
    displayName: data.realusername,
    gender: data.gender,
    profileImagePath: "",
  };
  const result = await axios.post(url, requestPayload);
  return result;
}

// 로그인
async function login(data) {
  const url = "/api/auth/login";
  const requestPayload = {
    email: data.email,
    password: data.password,
  };
  const result = await axios.post(url, requestPayload);
  return result;
}

// 로그아웃
async function logout(data) {
  const url = "/api/auth/logout";
  const requestPayload = {
    email: data.email,
    password: data.password,
  };
  const result = await axios.post(url, requestPayload);
  return result;
}

// 회원탈퇴
async function withdrawal(userId) {
  const url = `/api/user/${userId}`;
  const result = await axios.delete(url);
  return result;
}

// 유저 정보 조회
async function getUserInfo(userId) {
  const url = `/api/user/${userId}`;
  const result = await axios.get(url);
  return result;
}

export default {
  join,
  login,
  logout,
  withdrawal,
  getUserInfo,
};
