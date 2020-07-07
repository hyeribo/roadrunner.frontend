import React from "react";
import PropTypes from "prop-types";

import CommonLayout from "@templates/Layouts/CommonLayout";
import UserInfo from "@organisms/Info/UserInfo";

const MyRequestDetail = ({ history, t }) => {
  const onClickButton = () => {
    console.log("hello");
  };
  const buttonProps = {
    text: "회원가입",
    onClick: onClickButton,
    color: "disabled",
  };

  const handleRequest = () => {
    console.log("요청하기");
  };

  return (
    <CommonLayout
      pageName={t("lbl_order_detail")}
      showMenuButton={false}
      showBottom
      buttonProps={{
        text: t("lbl_request"),
        onClick: () => handleRequest(),
        color: "primary",
      }}
      backgroundColor="#ffffff"
    >
      <div id="rr-request-detail-page" className="global-content-container">
        <UserInfo type="runner" />
      </div>
      <div></div>
    </CommonLayout>
  );
};

MyRequestDetail.propTypes = {};

export default MyRequestDetail;
