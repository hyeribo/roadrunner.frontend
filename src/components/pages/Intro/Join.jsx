import React, { useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import PropTypes from "prop-types";

import CommonLayout from "@templates/Layouts/CommonLayout";
import JoinForm from "@templates/Forms/JoinForm";
import JoinForm2 from "@templates/Forms/JoinForm2";
import Step from "@molecules/Step/Step";

const Join = (props) => {
  const [step, setStep] = useState(1);
  const [disabled, setDisabled] = useState(true);

  const methods = useForm();
  const watchValues = methods.watch();

  useEffect(() => {
    validateStep(step);
  }, [watchValues]);

  const validateStep = (step) => {
    const passed =
      step === 1
        ? watchValues.realusername &&
          watchValues.realpassword &&
          watchValues.realpasswordconfirm &&
          watchValues.address
        : // : watchValues.email && watchValues.gender && watchValues.agree;
          watchValues.gender;

    setDisabled(!passed);
  };

  const onMoveStep = (step) => {
    if (step === 2 && disabled) return;

    setStep(step);
    validateStep(step);
  };

  const onSubmit = (a, b) => {
    console.log(a, b);
    console.log("errors", methods.errors);

    console.log("join!");
  };

  return (
    <CommonLayout
      pageName="회원가입"
      showBackButton
      showMenuButton={false}
      showBottom
      buttonProps={{
        text: step === 1 ? "다음" : "가입완료",
        onClick:
          step === 1 ? () => onMoveStep(2) : methods.handleSubmit(onSubmit),
        disabled: disabled,
        color: disabled ? "disabled" : "primary",
      }}
      backgroundColor="#ffffff"
    >
      <div id="rr-join-page" className="global-content-container">
        <Step
          style={{ marginTop: "14px", marginBottom: "27px" }}
          start={1}
          size={2}
          current={step}
          onChange={(step) => onMoveStep(step)}
        />
        {/* {enableNext} */}
        <FormContext {...methods}>
          <form>
            <JoinForm display={step === 1 ? "block" : "none"} />
            <JoinForm2 display={step === 2 ? "block" : "none"} />
          </form>
        </FormContext>
      </div>
    </CommonLayout>
  );
};

Join.propTypes = {};

export default Join;
