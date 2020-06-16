import React from "react";
import { useForm, FormContext } from "react-hook-form";
import PropTypes from "prop-types";

import CommonLayout from "@templates/Layouts/CommonLayout";
import ProposalForm from "../../templates/Forms/ProposalForm";

const ProposalWrite = () => {
  const methods = useForm();
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <CommonLayout
      pageName="글쓰기"
      showMenuButton={false}
      showBottom={true}
      buttonProps={{
        text: "등록하기",
        onClick: methods.handleSubmit(onSubmit),
        color: "primary",
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
