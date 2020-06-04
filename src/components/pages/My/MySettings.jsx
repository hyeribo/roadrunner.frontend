import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import { RightOutlined } from "@ant-design/icons";

import CommonLayout from "@templates/Layouts/CommonLayout";
import TextButton from "@atoms/Buttons/TextButton";

const LinkItem = (props) => (
  <Link to={props.url}>
    <div className="list-item">
      <div className="text">{props.text}</div>
      <div className="right">{props.children}</div>
    </div>
  </Link>
);

const ButtonItem = (props) => (
  <div className="list-item" onClick={props.onClick || null}>
    <div className="text">{props.text}</div>
    <div className="right">{props.children}</div>
  </div>
);

const MySettings = ({ history }) => {
  const handleLogout = () => {
    history.entries = [];
    history.index = -1;
    history.push("/login");
  };

  const handleDeleteAccount = () => {
    console.log("회원탈퇴");
  };

  const handleChangePush = (checked) => {
    console.log("알람 수신 설정", checked);
  };

  return (
    <CommonLayout
      pageName="설정"
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div id="rr-my-settings" className="global-content-container">
        <LinkItem text="약관정보" url="/terms">
          <RightOutlined />
        </LinkItem>
        <ButtonItem text="버전 1.0.0">
          <TextButton underline type="button">
            1.0.2 버전으로 업데이트
          </TextButton>
        </ButtonItem>
        <ButtonItem text="알림 수신 설정">
          <Switch defaultChecked={false} onChange={handleChangePush} />
        </ButtonItem>
        <ButtonItem text="로그아웃" onClick={handleLogout}></ButtonItem>
        <ButtonItem text="회원탈퇴" onClick={handleDeleteAccount}></ButtonItem>
      </div>
    </CommonLayout>
  );
};

export default MySettings;
