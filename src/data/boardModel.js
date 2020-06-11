import axios from "axios";

// 게시판 조회
async function getBoardItems(type) {
  const url = `/board/${type}`;
  const result = await axios.get(url);
  return result;
}

export default {
  getBoardItems,
};
