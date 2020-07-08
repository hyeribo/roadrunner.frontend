import React from "react";
import PropTypes from "prop-types";

import defaultProfileImg from "@assets/images/bedge-card-urgent.png";

const Date = ({ date }) => <div className="date-wrapper">{date}</div>;

const ReceiveMessage = ({ message }) => {
  const profileImg = message.sendUserImg
    ? `${process.env.REACT_APP_IMG_BASE_URL}${message.sendUserImg}`
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

const MessageList = ({ messages, myUserId }) => {
  return (
    <div className="rr-message-list">
      {messages.map((message, i) => {
        const components = [];
        if (i === 0 || message.date !== messages[i - 1].date) {
          components.push(<Date key={message.date} date={message.date} />);
        }
        if (message.sendUserId !== myUserId) {
          components.push(
            <ReceiveMessage key={`r-${message.messageId}`} message={message} />
          );
        } else {
          components.push(
            <SendMessage key={`s-${message.messageId}`} message={message} />
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
