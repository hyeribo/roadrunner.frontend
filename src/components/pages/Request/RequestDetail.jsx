import React from "react";
import PropTypes from "prop-types";

import CommonLayout from "@templates/Layouts/CommonLayout";
import UserInfo from "@organisms/UserInfo/UserInfo";


const RequestDetail = () => {
  const onClickButton = () =>{
    console.log("hello");
  }
  const buttonProps = {
    text: "회원가입",
    onClick: onClickButton,
    color: "disabled",
  }
  return (
    <CommonLayout 
    pageName='hello'
    showMenuBotton={false}
    backgroundColor="#ffffff"
    showBottom
    buttonProps={buttonProps}
    >
      <div id="rr-request-detail-page" className="global-content-container">
       <UserInfo type="runner" />

      </div>
      <div> 

      </div>
    </CommonLayout>
  
  );
};

RequestDetail.propTypes = {};

export default RequestDetail;
