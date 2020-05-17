import React from "react";
import {
  HomeOutlined,
  ProfileOutlined,
  MessageOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const BottomTab = () => {
  return (
    <div className="rr-bottom-tab">
      <div className="global-content-wrapper">
        <div className="tab-content">
          <div className="tab-item">
            <Link to="/main">
              <HomeOutlined />
              <p className="tab-item-text">홈</p>
            </Link>
          </div>
          <div className="tab-item">
            <Link to="/my/requests">
              <ProfileOutlined />
              <p className="tab-item-text">나의요청</p>
            </Link>
          </div>
          <div className="tab-item plus">
            <Link to="/write">
              <div className="circle-plus">
                <PlusOutlined />
              </div>
            </Link>
          </div>
          <div className="tab-item">
            <Link to="/chattings">
              <MessageOutlined />
              <p className="tab-item-text">채팅</p>
            </Link>
          </div>
          <div className="tab-item">
            <Link to="/my">
              <UserOutlined />
              <p className="tab-item-text">마이페이지</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomTab;
