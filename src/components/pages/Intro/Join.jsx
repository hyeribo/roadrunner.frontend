import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import JoinForm from "@templates/Forms/JoinForm";

import userModel from "@data/userModel";

const Join = ({ history, t }) => {
  const methods = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      await userModel.join(values);
      message.success(t("msg_join_s"));
      history.replace("/login");
    } catch (error) {
      message.error(t("msg_join_f"));
    } finally {
      setLoading(false);
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
        color: loading ? "disabled" : "primary",
        disabled: loading,
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
