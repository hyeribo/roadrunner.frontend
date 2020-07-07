import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Modal, message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import RequestForm from "@templates/Forms/RequestForm";

import requestModel from "@data/requestModel";

const { confirm } = Modal;

const RequestWrite = ({ history, t }) => {
  const methods = useForm();
  const [loading, setLoading] = useState(false);

  const handleWrite = async (values) => {
    try {
      setLoading(true);
      await requestModel.postRequest(values);
      message.success("요청이 등록되었습니다.");
      history.push("/home");
    } catch (error) {
      console.log(error);
      message.error("요청 등록에 실패했습니다.");
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
        onClick: () =>
          confirm({
            title: "심부름 요청을 등록하시겠습니까?",
            onOk: () => methods.handleSubmit(handleWrite)(),
          }),
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
