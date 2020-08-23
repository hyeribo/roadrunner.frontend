import React, { useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import JoinForm from "@templates/Forms/JoinForm";

import userModel from "@data/userModel";

import termsText from "@config/constants/terms";

const Join = ({ history, t }) => {
  const methods = useForm();
  const [loading, setLoading] = useState(false);
  const [terms, setTerms] = useState(null); // privacy, id, service

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

  const handleAgree = () => {};

  const handleToggleTerms = () => {
    setVisibleTerms(!visibleTerms);
  };

  useEffect(() => {
    if (terms && typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [terms]);

  return (
    <CommonLayout
      pageName={terms ? t(`lbl_agree_${terms}`) : t("lbl_join")}
      showBackButton={!!!terms}
      showMenuButton={false}
      showBottom
      buttonProps={{
        text: terms ? t(`lbl_ok`) : t("lbl_join_complete"),
        onClick: methods.handleSubmit(onSubmit),
        onClick: terms ? () => setTerms(null) : methods.handleSubmit(onSubmit),
        color: loading ? "disabled" : "primary",
        disabled: loading,
      }}
      backgroundColor="#ffffff"
    >
      <div id="rr-join-page" className="global-content-container p-t-24">
        <FormContext {...methods}>
          <form>
            <JoinForm visible={!!terms} onViewTerms={setTerms} />
          </form>
        </FormContext>
        {terms && (
          <div className="terms-container">
            <div className="terms-wrapper">
              {termsText[terms].split("\n").map((item, i) => {
                return (
                  <p key={i}>
                    {item}
                    <br />
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </CommonLayout>
  );
};

Join.propTypes = {};

export default Join;
