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
async function getProposalList(pagination) {
  const url = "/runner/orders";
  const result = await privateAPI.get(url, { params: pagination });
  return result.data.data;
}

// 나의 proposal order 리스트
async function getMyProposalList(pagination) {
  const url = `/runner/orders?runnerId=me`;
  const result = await privateAPI.get(url, { params: pagination });
  return result.data.data;
}

// 특정 runner의 order 리스트
async function getUserProposalList(runnerId, pagination) {
  const url = `/runner/${runnerId}/orders`;
  const result = await privateAPI.get(url, { params: pagination });
  return result.data.data.orders;
}

// proposal 상세조회
async function getProposalDetail(proposalId) {
  const url = `/runner/orders/${proposalId}`;
  const result = await privateAPI.get(url);
  return result.data.data;
}

// runner의 proposal에 요청을 보냄
async function acceptProposal(proposalId) {
  const url = `/runner/orders/${proposalId}/requests`;
  await privateAPI.post(url);
  return true;
}

// 나의 제안에 대한 요청 상태 변경
async function changeProposalStatus(proposalId, status) {
  const url = `/runner/orders/requests/${proposalId}`;
  const requestPayload = {
    requestStatus: status,
  };
  const result = await privateAPI.post(url, requestPayload);
  return result.data.data;
}

export default {
  postProposal,
  getMyProposalList,
  getProposalList,
  getUserProposalList,
  getProposalDetail,
  acceptProposal,
  changeProposalStatus,
};
