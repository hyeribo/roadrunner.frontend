import { privateAPI } from "@utils/sendAPI";

// 채팅 리스트 조회
async function getChattingList() {
  const url = `/chatting/loadRoom`;
  const result = await privateAPI.get(url);
  return result.data.data.chattingRooms;
}

// 채팅 리스트 조회
async function getChattingRoomDetail(roomKey) {
  const url = `/chatting/room?roomKey=${roomKey}`;
  const result = await privateAPI.get(url);
  return result.data.data;
}

// 채팅룸 생성
async function registChattingRoom(userId) {
  const url = `/chatting/joinRoom`;
  const requestPayload = {
    userIds: [userId],
  };
  const result = await privateAPI.post(url, requestPayload);
  return result.data.data.chattingRoom;
}

// 채팅룸 대화 조회
async function getMessages(roomKey) {
  const url = `/chatting/loadMessage?roomKey=${roomKey}`;
  const result = await privateAPI.get(url);
  console.log("result", result);
  return result.data.data.chattingMessage;
}

// 대화 보내기
async function sendMessage(roomKey, message) {
  const url = `/chatting/sendMessage`;
  const requestPayload = {
    roomKey,
    message,
  };
  const result = await privateAPI.post(url, requestPayload);
  console.log("result", result);
  return true;
}

export default {
  getChattingList,
  getChattingRoomDetail,
  registChattingRoom,
  getMessages,
  sendMessage,
};
