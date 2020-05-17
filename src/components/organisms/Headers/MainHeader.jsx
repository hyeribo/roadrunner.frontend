import React from "react";
import { MenuOutlined } from "@ant-design/icons";

const MainHeader = () => {
  return (
    <div className="rr-main-header">
      <div className="global-content-wrapper">
        <div className="content">
          <p className="title">Road Runner</p>
          <MenuOutlined className="icon-menu" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
