import React, { useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import JoinForm from "@templates/Forms/JoinForm";

import userModel from "@data/userModel";

const Join = ({ history }) => {
  const methods = useForm();

  const onSubmit = async (values) => {
    try {
      console.log("values", values);
      await userModel.join(values);
      message.success("회원가입에 성공했습니다.");
    } catch (error) {
      message.error("회원가입에 실패했습니다.");
    } finally {
      history.replace("/login");
    }
  };

  return (
    <CommonLayout
      pageName="회원가입"
      showBackButton
      showMenuButton={false}
      showBottom
      buttonProps={{
        text: "가입완료",
        onClick: methods.handleSubmit(onSubmit),
        color: "primary",
      }}
      backgroundColor="#ffffff"
    >
      <div id="rr-join-page" className="global-content-container p-t-24">
        <FormContext {...methods}>
          <form>
            <JoinForm />
          </form>
        </FormContext>
      </div>
    </CommonLayout>
  );
};

Join.propTypes = {};

export default Join;
