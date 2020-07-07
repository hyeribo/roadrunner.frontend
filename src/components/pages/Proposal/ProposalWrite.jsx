import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Modal, message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import ProposalForm from "@templates/Forms/ProposalForm";

import proposalModel from "@data/proposalModel";

const { confirm } = Modal;

const ProposalWrite = ({ history, t }) => {
  const methods = useForm();
  const [loading, setLoading] = useState(false);

  const handleWrite = async (values) => {
    try {
      setLoading(true);
      await proposalModel.postProposal(values);
      message.success("제안 등록에 성공했습니다.");
      history.push("/home");
    } catch (error) {
      console.log(error);
      message.error("제안 등록에 실패했습니다.");
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
            title: "심부름 제안을 등록하시겠습니까?",
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
            <ProposalForm />
          </form>
        </FormContext>
      </div>
    </CommonLayout>
  );
};

ProposalWrite.propTypes = {};

export default ProposalWrite;
