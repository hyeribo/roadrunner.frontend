import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Select, Switch, Modal, message } from "antd";
import { RightOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

import CommonLayout from "@templates/Layouts/CommonLayout";
import TextButton from "@atoms/Buttons/TextButton";

import { setLanguage } from "@modules/lang/langActions";
import { purge } from "@modules/rootActions";
import userModel from "@data/userModel";
import constants from "@config/constants";

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

const MySettings = ({ history, setAuthenticated, t }) => {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  const deleteAccount = async () => {
    try {
      // 회원탈퇴 request
      await userModel.withdrawal();
      // 리덕스 정보 초기화
      dispatch(purge());
      // 로컬스토리지 토큰 삭제
      localStorage.removeItem(constants.LOCAL_TOKEN_KEY);
      // 인증 실패 상태로 변경
      setAuthenticated(false);
      message.success(t("msg_withdrawal_s"));
    } catch (error) {
      console.log(error);
      message.error(t("msg_withdrawal_f"));
    }
  };

  const handleDeleteAccount = () => {
    confirm({
      title: t("lbl_withdrawal"),
      icon: <ExclamationCircleOutlined />,
      content: (
        <div>
          <p>{t("cfm_withdrawal1")}</p>
          <p>{t("cfm_withdrawal2")}</p>
        </div>
      ),
      onOk() {
        deleteAccount();
      },
    });
  };

  const handleLogout = () => {
    confirm({
      title: t("cfm_logout"),
      icon: <ExclamationCircleOutlined />,
      onOk() {
        // 리덕스 정보 초기화
        dispatch(purge());
        // 로컬스토리지 토큰 삭제
        localStorage.removeItem(constants.LOCAL_TOKEN_KEY);
        // 인증 실패 상태로 변경
        setAuthenticated(false);
      },
    });
  };

  const handleChangePush = (checked) => {
    console.log("알람 수신 설정", checked);
  };

  return (
    <CommonLayout
      pageName={t("lbl_settings")}
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div id="rr-my-settings" className="global-content-container">
        {/* <LinkItem text={t("lbl_terms")} url="/terms">
          <RightOutlined />
        </LinkItem> */}
        <ButtonItem text={`${t("lbl_version")} 1.0.0`}>
          {/* <TextButton underline type="button">
            1.0.2 버전으로 업데이트
          </TextButton> */}
        </ButtonItem>
        <ButtonItem text={t("lbl_setting_lang")}>
          <Select
            defaultValue={lang}
            style={{ width: 90 }}
            onChange={(value) => dispatch(setLanguage(value))}
          >
            <Option value="en">English</Option>
            <Option value="ko">한글</Option>
          </Select>
        </ButtonItem>
        {/* <ButtonItem text={t("lbl_setting_push")}>
          <Switch defaultChecked={false} onChange={handleChangePush} />
        </ButtonItem> */}
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
