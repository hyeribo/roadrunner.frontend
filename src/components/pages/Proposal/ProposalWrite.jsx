import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import CommonLayout from "@templates/Layouts/CommonLayout";
import ProposalForm from "@templates/Forms/ProposalForm";

const ProposalWrite = () => {
  const { t } = useTranslation();
  const methods = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (a) => {
    console.log(a);
    console.log("errors", methods.errors);

    console.log("submit!");
  };

  return (
    <CommonLayout
      pageName={t("lbl_write")}
      showMenuButton={false}
      showBottom
      buttonProps={{
        text: t("lbl_register"),
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
