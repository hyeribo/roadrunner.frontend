import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import ProposalForm from "@templates/Forms/ProposalForm";
import proposalModel from "@data/proposalModel";

const ProposalWrite = ({ history }) => {
  const { t } = useTranslation();
  const methods = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
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
        onClick: methods.handleSubmit(onSubmit),
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
