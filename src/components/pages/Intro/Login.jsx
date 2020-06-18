import React from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";

import CommonLayout from "@templates/Layouts/CommonLayout";
import LoginForm from "@templates/Forms/LoginForm";

import userModel from "@data/userModel";
import { setUser } from "@modules/user/userActions";

import bgImage from "@assets/images/bg-login.png";
import constants from "@config/constants";

const Login = ({ history, setAuthenticated, t }) => {
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    try {
      // 로그인 요청
      const result = await userModel.login(values);
      // 로컬스토리지에 토큰 저장
      localStorage.setItem(constants.LOCAL_TOKEN_KEY, result.data.data.token);
      // 로그인 유저 정보 리덕스에 저장
      dispatch(setUser(result.data.data.user));
      // 인증 성공 상태로 변경
      setAuthenticated(true);
      // 메인화면으로 이동
      history.push("/home");
    } catch (error) {
      message.error(t("msg_login_f"));
    }
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
