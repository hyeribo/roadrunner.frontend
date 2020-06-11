import React from "react";

import CommonLayout from "@templates/Layouts/CommonLayout";
import LoginForm from "@templates/Forms/LoginForm";

import bgImage from "@assets/images/bg-login.png";

import userModel from "@data/userModel";

const Login = ({ history }) => {
  const onSubmit = async (values) => {
    try {
      console.log("values", values);
      await userModel.login(values);
      message.success("회원가입에 성공했습니다.");
    } catch (error) {
      message.error("회원가입에 실패했습니다.");
    } finally {
      history.replace("/home");
    }
  };

  const onMoveToJoin = () => {
    history.push("/join");
  };

  const buttonProps = {
    text: "회원가입",
    onClick: onMoveToJoin,
    color: "default",
  };

  return (
    <CommonLayout
      pageName="로그인"
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
        <LoginForm onSubmit={onSubmit} />
      </div>
    </CommonLayout>
  );
};

Login.propTypes = {};

export default Login;
