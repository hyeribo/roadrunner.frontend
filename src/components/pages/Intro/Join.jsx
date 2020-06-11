import React, { useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { message } from "antd";
import { useTranslation } from "react-i18next";

import CommonLayout from "@templates/Layouts/CommonLayout";
import JoinForm from "@templates/Forms/JoinForm";

import userModel from "@data/userModel";

const Join = ({ history }) => {
  const { t } = useTranslation();
  const methods = useForm();

  const onSubmit = async (values) => {
    try {
      await userModel.join(values);
      message.success(t("msg_join_s"));
    } catch (error) {
      message.error(t("msg_join_f"));
    } finally {
      history.replace("/login");
    }
  };

  return (
    <CommonLayout
      pageName={t("lbl_join")}
      showBackButton
      showMenuButton={false}
      showBottom
      buttonProps={{
        text: t("lbl_join_complete"),
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
