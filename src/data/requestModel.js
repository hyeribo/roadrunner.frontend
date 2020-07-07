import { privateAPI } from "@utils/sendAPI";
import moment from "moment";

// shopper의 order 생성
async function postRequest(values) {
  const url = "/shopper/orders";
  const totalExpectedPrice = values.reqItems.reduce((total, items) => {
    return total + +items.price;
  }, 0);

  const requestPayload = {
    title: values.reqTitle,
    contents: "contents",
    priority: values.reqPriority,
    startReceiveTime: values.reqReceiveTime.start.format("HH:mm:ss"),
    endReceiveTime: values.reqReceiveTime.end.format("HH:mm:ss"),
    discussYn: !!values.discussYn,
    receiveAddress: values.reqReceiveAddress,
    additionalMessage: values.reqMemo,
    estimatedPrice: totalExpectedPrice,
    runnerTip:
      values.reqPriority === "URGENT"
        ? totalExpectedPrice * 0.15
        : totalExpectedPrice * 0.1,
    orderItems: values.reqItems,
    orderImages: values.files,
    startContactableTime: values.reqReceiveTime.start.format("HH:mm:ss"),
    endContactableTime: values.reqReceiveTime.end.format("HH:mm:ss"),
  };

  await privateAPI.post(url, requestPayload);
  return true;
}

// 모든 shopper가 올린 order 리스트
async function getRequestList(pagination) {
  const url = "/shopper/orders";
  const result = await privateAPI.get(url, { params: pagination });
  return result.data.data.orders;
}

// 특정 shopper의 order 리스트
async function getUserRequestList(shopperId, pagination) {
  const url = `/shopper/${shopperId}/orders`;
  const result = await privateAPI.get(url, { params: pagination });
  return result.data.data.orders;
}

// request 상세조회
async function getRequestDetail(requestId) {
  const url = `/shopper/orders/${requestId}`;
  const result = await privateAPI.get(url);
  return result.data.data.order;
}

// shopper의 request에 요청을 보냄
async function acceptRequest(requestId) {
  const url = `/shopper/orders/${requestId}/requests`;
  await privateAPI.post(url);
  return true;
}

export default {
  postRequest,
  getRequestList,
  getUserRequestList,
  getRequestDetail,
  acceptRequest,
};
