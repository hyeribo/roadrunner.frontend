import { privateAPI } from "@utils/sendAPI";

// 모든 runner가 올린 order 리스트
async function getProposalList() {
  const url = "/runner/orders";
  const result = await privateAPI.get(url);
  return result.data.data.orders;
}

export default {
  getProposalList,
};
