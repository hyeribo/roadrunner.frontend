import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import RequestForm from "@templates/Forms/RequestForm";

import requestModel from "@data/requestModel";

const RequestWrite = ({ history }) => {
  const { t } = useTranslation();
  const methods = useForm();
  const [loading, setLoading] = useState(false);

  const handleWrite = async (values) => {
    try {
      setLoading(true);
      await requestModel.postRequest(values);
      message.success(t("msg_req_write_s"));
      history.push("/home");
    } catch (error) {
      console.log(error);
      message.error(t("msg_req_write_f"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <CommonLayout
      pageName={t("lbl_write")}
      showMenuButton={false}
      showBottom
      buttonProps={{
        text: t("lbl_register"),
        onClick: methods.handleSubmit(handleWrite),
        color: loading ? "disabled" : "primary",
        disabled: loading,
      }}
      backgroundColor="#ffffff"
    >
      <div className="p-20">
        <FormContext {...methods}>
          <form>
            <RequestForm />
          </form>
        </FormContext>
      </div>
    </CommonLayout>
  );
};

RequestWrite.propTypes = {};

export default RequestWrite;
