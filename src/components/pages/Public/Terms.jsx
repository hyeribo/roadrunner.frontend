import React from "react";

import CommonLayout from "@templates/Layouts/CommonLayout";

const TersmPage = ({ history, t }) => {
  const buttonProps = {
    text: t("lbl_ok"),
    onClick: () => history.goBack(),
    color: "primary",
  };

  const termsText = t("terms_privacy");

  return (
    <CommonLayout
      pageName={t("lbl_agree_privacy")}
      showBackButton={false}
      showMenuButton={false}
      showBottom
      buttonProps={buttonProps}
      backgroundColor="#ffffff"
    >
      <div id="rr-terms-page">
        <div className="terms-wrapper">
          {termsText.split("\n").map((item, i) => {
            return (
              <p key={i}>
                {item}
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </CommonLayout>
  );
};

export default TersmPage;
