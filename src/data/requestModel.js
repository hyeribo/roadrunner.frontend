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
  return result.data.data;
}

// 나의 request order 리스트 & 남의 심부름제안에 요청한 리스트
async function getMyRequestList(pagination) {
  const myOrderUrl = `/shopper/orders?shopperId=me`;
  const myOrderResult = await privateAPI.get(myOrderUrl, {
    params: pagination,
  });
  const myRequestUrl = `/shopper/requests?shopperId=me`;
  const myRequestResult = await privateAPI.get(myRequestUrl, {
    params: pagination,
  });
  const result = myRequestResult.data.data.orderRequests.concat(
    myOrderResult.data.data.orders
  );
  return result;
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
  console.log("result", result.data.data);
  return result.data.data;
}

// 나의 요청에 제안한 리스트 조회
async function getRequestProposals(requestId) {
  const url = `/shopper/orders/${requestId}/requests`;
  const result = await privateAPI.get(url);
  return result.data.data.requests;
}

// shopper의 request에 요청을 보냄
async function acceptRequest(requestId) {
  const url = `/shopper/orders/${requestId}/requests`;
  await privateAPI.post(url);
  return true;
}

// 나의 요청에 대한 제안 상태 변경
async function changeRequestStatus(requestId, status) {
  const url = `/shopper/orders/requests/${requestId}`;
  const requestPayload = {
    requestStatus: status,
  };
  const result = await privateAPI.put(url, requestPayload);
  return result.data.data;
}

export default {
  postRequest,
  getRequestList,
  getMyRequestList,
  getUserRequestList,
  getRequestDetail,
  getRequestProposals,
  acceptRequest,
  changeRequestStatus,
};
