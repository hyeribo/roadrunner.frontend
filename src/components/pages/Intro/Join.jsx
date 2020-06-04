import React, { useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";

import CommonLayout from "@templates/Layouts/CommonLayout";
import JoinForm from "@templates/Forms/JoinForm";

const Join = (props) => {
  const methods = useForm();

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
