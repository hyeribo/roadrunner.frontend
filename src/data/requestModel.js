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
    startReceiveTime: 55800,
    endReceiveTime: 64800,
    receiveAddress: values.reqReceiveAddress,
    additionalMessage: values.reqMemo,
    estimatedPrice: totalExpectedPrice,
    runnerTip: totalExpectedPrice * 0.1,
    orderItems: values.reqItems,
    orderImages: values.files,
    startReceiveTime: moment(values.reqReceiveTime.start, "HH:mm:ss: A").diff(
      moment().startOf("day"),
      "seconds"
    ),
    endReceiveTime: moment(values.reqReceiveTime.end, "HH:mm:ss: A").diff(
      moment().startOf("day"),
      "seconds"
    ),
  };

  await privateAPI.post(url, requestPayload);
  return true;
}

// 모든 shopper가 올린 order 리스트
async function getRequestList() {
  const url = "/shopper/orders";
  const result = await privateAPI.get(url);
  return result.data.data.orders;
}

// 특정 shopper의 order 리스트
async function getUserRequestList(shopperId) {
  const url = `/shopper/${shopperId}/orders`;
  const result = await privateAPI.get(url);
  return result.data.data.orders;
}

export default {
  postRequest,
  getRequestList,
  getUserRequestList,
};
