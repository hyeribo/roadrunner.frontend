import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import defaultProfileImg from "@assets/images/bedge-card-urgent.png";

const Date = ({ date }) => <div className="date-wrapper">{date}</div>;

const ReceiveMessage = ({ message, profile }) => {
  const profileImg = profile
    ? `${process.env.REACT_APP_IMG_BASE_URL}${profile}`
    : defaultProfileImg;

  return (
    <div className="message-wrapper">
      <div className="profile-img">
        <img src={profileImg} />
      </div>
      <div className="message">{message.message}</div>
      <div className="time text-left">
        <span className="right">{message.time}</span>
      </div>
    </div>
  );
};

const SendMessage = ({ message }) => {
  return (
    <div className="message-wrapper">
      <div className="time text-right">
        <span className="left">{message.time}</span>
      </div>
      <div className="message blue">{message.message}</div>
    </div>
  );
};

const MessageList = ({ messages, myUserId, users }) => {
  return (
    <div className="rr-message-list">
      {messages.map((message, i) => {
        const components = [];
        if (
          i === 0 ||
          moment(message.createdAt).format("YYYY-MM-DD") !==
            moment(messages[i - 1].createdAt).format("YYYY-MM-DD")
        ) {
          components.push(
            <Date
              key={`message.date-${i}`}
              date={moment(message.createdAt).format("YYYY-MM-DD")}
            />
          );
        }
        if (message.userId === myUserId) {
          components.push(
            <SendMessage key={`s-${message.messageId}`} message={message} />
          );
        } else {
          components.push(
            <ReceiveMessage
              key={`r-${message.messageId}`}
              message={message}
              profile={users.other.profileImagePath}
            />
          );
        }
        return components;
      })}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      messageId: PropTypes.number,
      message: PropTypes.string,
      sendUserId: PropTypes.number,
      sendUserImg: PropTypes.string,
      date: PropTypes.string,
    })
  ),
  myUserId: PropTypes.number,
};

export default MessageList;
