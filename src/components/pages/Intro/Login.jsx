import React from "react";

import CommonLayout from "@templates/Layouts/CommonLayout";
import LoginForm from "@templates/Forms/LoginForm";

import bgImage from "@assets/images/bg-login.png";

const Login = ({ history }) => {
  const onSubmit = (a, b) => {
    history.replace("/home");
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
