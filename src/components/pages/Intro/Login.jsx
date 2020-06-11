import React from "react";
import { useTranslation } from "react-i18next";

import CommonLayout from "@templates/Layouts/CommonLayout";
import LoginForm from "@templates/Forms/LoginForm";

import bgImage from "@assets/images/bg-login.png";

import userModel from "@data/userModel";

const Login = ({ history }) => {
  const { t } = useTranslation();

  const onSubmit = async (values) => {
    try {
      console.log("values", values);
      await userModel.login(values);
      message.success(t("msg_join_s"));
    } catch (error) {
      message.error(t("msg_join_f"));
    } finally {
      history.replace("/home");
    }
  };

  const onMoveToJoin = () => {
    history.push("/join");
  };

  const buttonProps = {
    text: t("lbl_join"),
    onClick: onMoveToJoin,
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
        <LoginForm onSubmit={onSubmit} />
      </div>
    </CommonLayout>
  );
};

Login.propTypes = {};

export default Login;
