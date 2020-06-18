import { privateAPI } from "@utils/sendAPI";

// 제안 글쓰기
async function postProposal(values) {
  const url = "/runner/orders";
  const requestPayload = {
    message: values.message,
    estimatedTime: values.estimatedTime,
    introduce: values.introduce,
    distance: values.distance,
    address: values.address,
    startContactableTime: values.contactTime.start.format("HH:mm:ss"),
    endContactableTime: values.contactTime.end.format("HH:mm:ss"),
    additionalMessage: "",
    payments: values.payments,
  };

  await privateAPI.post(url, requestPayload);
  return true;
}

// 모든 runner가 올린 order 리스트
async function getProposalList() {
  const url = "/runner/orders";
  const result = await privateAPI.get(url);
  return result.data.data.orders;
}

// 특정 runner의 order 리스트
async function getUserProposalList(runnerId) {
  const url = `/runner/${runnerId}/orders`;
  const result = await privateAPI.get(url);
  return result.data.data.orders;
}

export default {
  postProposal,
  getProposalList,
  getUserProposalList,
};
