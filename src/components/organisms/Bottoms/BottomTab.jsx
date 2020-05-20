import React from "react";
import {
  HomeOutlined,
  ProfileOutlined,
  MessageOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const tabs = [
  { icon: <HomeOutlined />, tabName: "home", link: "/home" },
  { icon: <ProfileOutlined />, tabName: "myrequest", link: "/my/requests" },
  { icon: <PlusOutlined />, tabName: "plus", link: "/write" },
  { icon: <MessageOutlined />, tabName: "chatting", link: "/chattings" },
  { icon: <UserOutlined />, tabName: "my", link: "/my" },
];

const BottomTab = ({ tabName }) => {
  const { t } = useTranslation();

  return (
    <div className="rr-bottom-tab">
      <div className="global-content-wrapper">
        <div className="tab-content">
          <div className={`tab-item ${tabName === "home" && "active"}`}>
            <Link to="/home">
              <HomeOutlined />
              <p className="tab-item-text">{t("tab_home")}</p>
            </Link>
          </div>
          <div className={`tab-item ${tabName === "myrequest" && "active"}`}>
            <Link to="/my/requests">
              <ProfileOutlined />
              <p className="tab-item-text">{t("tab_myrequest")}</p>
            </Link>
          </div>
          <div className="tab-item plus">
            <Link to="/write">
              <div className="circle-plus">
                <PlusOutlined />
              </div>
            </Link>
          </div>
          <div className={`tab-item ${tabName === "chattings" && "active"}`}>
            <Link to="/chattings">
              <MessageOutlined />
              <p className="tab-item-text">{t("tab_chatting")}</p>
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

export default BottomTab;
