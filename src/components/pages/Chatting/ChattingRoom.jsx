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
  const [messages, setMessages] = useState([]);

  const fetch = async () => {
    try {
      const result = await chattingModel.getMessages(match.params.room_key);
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
      pageName={chatting.userName}
      showMenuButton={false}
      showBottom
      backgroundColor="#ffffff"
      extraBottom={<SendMessage onSendMessage={handleSendMessage} />}
    >
      <div>
        <MessageList messages={messages} myUserId={user.userId} />
      </div>
    </CommonLayout>
  );
};

export default ChattingRoom;
