import { privateAPI } from "@utils/sendAPI";

// shopper의 order 생성
async function postRequest() {
  const url = "/shopper/orders";
  const requestPayload = {};
}

// 모든 shopper가 올린 order 리스트
async function getRequestList() {
  const url = "/shopper/orders";
  const result = await privateAPI.get(url);
  return result;
}

export default {
  getRequestList,
};
