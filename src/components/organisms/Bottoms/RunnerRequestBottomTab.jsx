import React from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const tabs = [
  { icon: <HomeOutlined />, tabName: "home", link: "/home" },
  { icon: <ProfileOutlined />, tabName: "myrequest", link: "/my/requests" },
  { icon: <PlusOutlined />, tabName: "plus", link: "/write" },
  { icon: <MessageOutlined />, tabName: "chatting", link: "/chattings" },
  { icon: <UserOutlined />, tabName: "my", link: "/my" },
];

const RequestBottomTab = ({ tabName }) => {
  const { t } = useTranslation();

  return (
    <div className="rr-runnerrequest-bottom-tab">
      <div className="global-content-wrapper">
        <div className="tab-content">
          <div className={`tab-item ${tabName === "home" && "active"}`}>
            <Link to="/home">
              <HomeOutlined />
              <p className="tab-item-text">{t("tab_home")}</p>
            </Link>
          </div>
          <div className="tab-item plus">
            <Link to="/write">
              <div className="circle-plus">
                <PlusOutlined />
              </div>
            </Link>
          </div>
          <div className={`tab-item ${tabName === "my" && "active"}`}>
            <Link to="/my">
              <UserOutlined />
              <p className="tab-item-text">{t("tab_my")}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBottomTab;
