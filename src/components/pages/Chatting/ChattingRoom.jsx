import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CommonLayout from "@templates/Layouts/CommonLayout";
import MessageList from "@molecules/List/MessageList";
import SendMessage from "@molecules/Message/SendMessage";

import chattingModel from "@data/chattingModel";

const ChattingRoom = ({ t, match }) => {
  const user = useSelector((state) => state.user);
  const [chatting, setChatting] = useState({
    userName: "심부름",
  });
  const [users, setUsers] = useState({ me: {}, other: {} });
  const [messages, setMessages] = useState([]);

  const fetch = async () => {
    try {
      const result = await chattingModel.getMessages(match.params.room_key);
      const chattingRoomInfo = await chattingModel.getChattingRoomDetail(
        match.params.room_key
      );
      console.log("chattingRoomInfo", chattingRoomInfo);
      const me = chattingRoomInfo.users.filter(
        (u) => u.userId === user.userId
      )[0];
      const other = chattingRoomInfo.users.filter(
        (u) => u.userId !== user.userId
      )[0];
      setUsers({ me, other });
      console.log("users!!!", { me, other });
      setMessages(result.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = async (message) => {
    try {
      await chattingModel.sendMessage(match.params.room_key, message);
      fetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [match.params.room_key]);

  return (
    <CommonLayout
      pageName={users.other.displayName}
      showMenuButton={false}
      showBottom
      backgroundColor="#ffffff"
      extraBottom={<SendMessage onSendMessage={handleSendMessage} />}
    >
      <div>
        <MessageList messages={messages} myUserId={user.userId} users={users} />
      </div>
    </CommonLayout>
  );
};

export default ChattingRoom;
