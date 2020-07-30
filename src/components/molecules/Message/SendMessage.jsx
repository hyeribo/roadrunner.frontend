import React, { useState } from "react";
import { SendOutlined } from "@ant-design/icons";

const SendMessage = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="rr-send-message">
      <div className="send-input">
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div className="send-button" onClick={() => handleSendMessage()}>
        <SendOutlined />
      </div>
    </div>
  );
};

export default SendMessage;
