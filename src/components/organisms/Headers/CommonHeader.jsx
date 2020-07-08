import React from "react";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";

const CommonHeader = (props) => {
  const { pageName, showBackButton, showMenuButton } = props;
  const history = useHistory();

  return (
    <div className="rr-common-header">
      <div className="global-content-wrapper">
        <div className="content">
          <div className="header-icon">
            {showBackButton && <ArrowLeftOutlined onClick={history.goBack} />}
          </div>
          <p className="title">{pageName}</p>
          <div className="header-icon">
            {showMenuButton && <MenuOutlined />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
