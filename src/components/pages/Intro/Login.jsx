import React from "react";
import { useTranslation } from "react-i18next";
import { message } from "antd";
import { useDispatch } from "react-redux";

import CommonLayout from "@templates/Layouts/CommonLayout";
import LoginForm from "@templates/Forms/LoginForm";

import bgImage from "@assets/images/bg-login.png";

import userModel from "@data/userModel";
import { setUser } from "@modules/user/userActions";

const Login = ({ history }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      console.log("values", values);
      const result = await userModel.login(values);
      dispatch(setUser(result.data.data.user));
      history.replace("/home");
    } catch (error) {
      message.error(t("msg_login_f"));
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
