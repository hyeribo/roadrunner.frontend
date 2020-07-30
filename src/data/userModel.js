import { publicAPI, privateAPI } from "@utils/sendAPI";

// 회원가입
async function join(data) {
  const url = "/auth/join";
  const requestPayload = {
    email: data.email,
    password: data.realpassword,
    displayName: data.realusername,
    gender: data.gender,
    address: data.address,
    profileImagePath: data.files ? data.files[0] : "",
  };
  const result = await publicAPI.post(url, requestPayload);
  return result;
}

// 로그인
async function login(data) {
  const url = "/auth/login";
  const requestPayload = {
    email: data.email,
    password: data.password,
  };
  const result = await publicAPI.post(url, requestPayload);
  return result;
}

// 토큰 유효 체크
async function verifyToken() {
  const url = "/auth/verifyToken";
  const result = await privateAPI.post(url);
  return result;
}

// 로그아웃
async function logout(data) {
  const url = "/auth/logout";
  const requestPayload = {
    email: data.email,
    password: data.password,
  };
  const result = await privateAPI.post(url, requestPayload);
  return result;
}

// 회원탈퇴
async function withdrawal() {
  const url = `/user`;
  const result = await privateAPI.delete(url);
  return result;
}

// 유저 정보 조회
async function getUserInfo(userId) {
  const url = `/user/${userId}`;
  const result = await privateAPI.get(url);
  return result.data.data;
}

export default {
  join,
  login,
  verifyToken,
  logout,
  withdrawal,
  getUserInfo,
};
