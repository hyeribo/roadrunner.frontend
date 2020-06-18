import React, { useState } from "react";

import CommonLayout from "@templates/Layouts/CommonLayout";
import ModeButton from "@atoms/Buttons/ModeButton";

const Write = ({ history, t }) => {
  const [mode, setMode] = useState("");

  const handleMovetoWrite = () => {
    if (mode === "runner") {
      history.push("/proposal/write");
    } else {
      history.push("/request/write");
    }
  };

  const buttonProps = {
    text: t("lbl_next"),
    onClick: handleMovetoWrite,
    color: mode ? "primary" : "disabled",
    disabled: !!!mode,
  };

  return (
    <CommonLayout
      pageName={t("lbl_write")}
      showMenuButton={false}
      showBottom
      buttonProps={buttonProps}
      backgroundColor="#ffffff"
    >
      <div id="rr-write-intro">
        <div className="paragraph">
          <p>{t("lbl_write_intro_1")}</p>
          <p>{t("lbl_write_intro_2")}</p>
        </div>
        <div className="select-area">
          <div className="select-item">
            <ModeButton
              color={mode === "runner" ? "primary" : "default"}
              onClick={() => setMode("runner")}
            >
              Runner
            </ModeButton>
            <p className="select-text">{t("lbl_select_runner")}</p>
          </div>
          <div className="select-item">
            <ModeButton
              color={mode === "shopper" ? "primary" : "default"}
              onClick={() => setMode("shopper")}
            >
              Shopper
            </ModeButton>
            <p className="select-text">{t("lbl_select_shopper")}</p>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Write;
