import React from "react";
import { SendOutlined } from "@ant-design/icons";

const SendMessage = () => {
  return (
    <div className="rr-send-message">
      <div className="send-input">
        <input />
      </div>
      <div className="send-button">
        <SendOutlined />
      </div>
    </div>
  );
};

export default SendMessage;
