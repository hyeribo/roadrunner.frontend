import React from "react";
import { useTranslation } from "react-i18next";
import { message } from "antd";
import { useDispatch } from "react-redux";

import CommonLayout from "@templates/Layouts/CommonLayout";
import LoginForm from "@templates/Forms/LoginForm";

import userModel from "@data/userModel";
import { setUser } from "@modules/user/userActions";

import bgImage from "@assets/images/bg-login.png";
import constants from "@config/constants";

const Login = ({ history, setAuthenticated }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    // 로그인 요청
    const result = await userModel.login(values);
    setAuthenticated(true);
    // 로컬스토리지에 토큰 저장
    localStorage.setItem(constants.LOCAL_TOKEN_KEY, result.data.data.token);
    // 로그인 유저 정보 리덕스에 저장
    dispatch(setUser(result.data.data.user));
    // 메인화면으로 이동
    history.replace("/home");
  };

  const buttonProps = {
    text: t("lbl_join"),
    onClick: () => history.push("/join"),
    color: "default",
  };

  return (
    <CommonLayout
      pageName={t("lbl_login")}
      showBackButton={false}
      showMenuButton={false}
      showBottom
      buttonProps={buttonProps}
      backgroundColor="#ffffff"
    >
      <div id="rr-login-page" className="global-content-container">
        <div className="img-wrapper">
          <img src={bgImage} alt="login-bg" />
        </div>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </CommonLayout>
  );
};

Login.propTypes = {};

export default Login;
