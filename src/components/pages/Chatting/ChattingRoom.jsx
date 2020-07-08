import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CommonLayout from "@templates/Layouts/CommonLayout";
import MessageList from "@molecules/List/MessageList";
import SendMessage from "@molecules/Message/SendMessage";

const Date = ({ date }) => {};

const ChattingRoom = ({ t, match }) => {
  const user = useSelector((state) => state.user);
  const [chatting, setChatting] = useState({
    userName: "심부름",
  });
  const [messages, setMessages] = useState([
    {
      messageId: 1,
      message: "안녕하세요. 심부름입니다. 오늘 2시에 ABC마트 방문 예정입니다.",
      sendUserId: 1,
      sendUserImg: "",
      date: "2020-05-01",
      time: "오후 7:02",
    },
    {
      messageId: 2,
      message: "네 ㅎㅎ 안녕하세요! 저 샴푸가 필요해서요~!",
      sendUserId: 2,
      sendUserImg: "",
      date: "2020-05-01",
      time: "오후 7:02",
    },
    {
      messageId: 3,
      message: "아 넵!",
      sendUserId: 1,
      sendUserImg: "",
      date: "2020-05-01",
      time: "오후 7:02",
    },
    {
      messageId: 4,
      message: "샴푸중 어떤 브랜드 몇 ml로 드릴까요?!",
      sendUserId: 1,
      sendUserImg: "",
      date: "2020-05-02",
      time: "오후 7:02",
    },
    {
      messageId: 5,
      message: "A샴푸, 750ml요!",
      sendUserId: 2,
      sendUserImg: "",
      date: "2020-05-02",
      time: "오후 7:02",
    },
    {
      messageId: 6,
      message: "ㅇㅋㅇㅋ",
      sendUserId: 1,
      sendUserImg: "",
      date: "2020-05-02",
      time: "오후 7:02",
    },
    {
      messageId: 6,
      message: "ㅈㄱㅈ!",
      sendUserId: 1,
      sendUserImg: "",
      date: "2020-05-03",
      time: "오후 7:02",
    },
    {
      messageId: 6,
      message: "곧 도착예정!",
      sendUserId: 1,
      sendUserImg: "",
      date: "2020-05-03",
      time: "오후 7:02",
    },
    {
      messageId: 6,
      message: "감사 ^^",
      sendUserId: 2,
      sendUserImg: "",
      date: "2020-05-03",
      time: "오후 7:02",
    },
  ]);

  const fetch = async () => {
    // try {
    //   const result = await requestModel.getRequestDetail(
    //     match.params.request_id
    //   );
    //   setData({
    //     ...data,
    //     order: result,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    fetch();
  }, [match.params.chatting_id]);

  return (
    <CommonLayout
      pageName={chatting.userName}
      showMenuButton={false}
      showBottom
      backgroundColor="#ffffff"
      extraBottom={<SendMessage />}
    >
      <div>
        <MessageList
          messages={messages}
          // myUserId={user.userId}
          myUserId={2}
        />
      </div>
    </CommonLayout>
  );
};

export default ChattingRoom;
