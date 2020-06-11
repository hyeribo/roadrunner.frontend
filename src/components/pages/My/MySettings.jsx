import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Select, Switch, Modal, message } from "antd";
import { RightOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

import CommonLayout from "@templates/Layouts/CommonLayout";
import TextButton from "@atoms/Buttons/TextButton";

import userModel from "@data/userModel";
import language, { changeLanguage } from "@config/i18n";

const { confirm } = Modal;
const { Option } = Select;

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
  const { t } = useTranslation();

  const deleteAccount = async () => {
    try {
      await userModel.withdrawal(1);
      message.success("회원 탈퇴 되었습니다.");
    } catch (error) {
      console.log(error);
      message.error("회원 탈퇴에 실패했습니다.");
    }
  };

  const handleDeleteAccount = () => {
    confirm({
      title: "회원탈퇴",
      icon: <ExclamationCircleOutlined />,
      content: (
        <div>
          <p>로드러너 회원 탈퇴 하시겠습니까?</p>
          <p>
            회원 탈퇴시, 회원 정보 및 이용 내역 등 모든 정보가 삭제되며 복구가
            불가능합니다.
          </p>
        </div>
      ),
      onOk() {
        deleteAccount();
      },
    });
  };

  const handleLogout = () => {
    history.entries = [];
    history.index = -1;
    history.push("/login");
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
        {/* <LinkItem text="약관정보" url="/terms">
          <RightOutlined />
        </LinkItem> */}
        <ButtonItem text="버전 1.0.0">
          <TextButton underline type="button">
            1.0.2 버전으로 업데이트
          </TextButton>
        </ButtonItem>
        <ButtonItem text="언어 설정">
          <Select
            defaultValue={language}
            style={{ width: 90 }}
            onChange={changeLanguage}
          >
            <Option value="en">English</Option>
            <Option value="ko">한글</Option>
          </Select>
        </ButtonItem>
        <ButtonItem text="알림 수신 설정">
          <Switch defaultChecked={false} onChange={handleChangePush} />
        </ButtonItem>
        <ButtonItem text={t("lbl_logout")} onClick={handleLogout}></ButtonItem>
        <ButtonItem
          text={t("lbl_withdrawal")}
          onClick={handleDeleteAccount}
        ></ButtonItem>
      </div>
    </CommonLayout>
  );
};

export default MySettings;
