import React, { useState } from "react";

import CommonLayout from "@templates/Layouts/CommonLayout";
import ModeButton from "@atoms/Buttons/ModeButton";

const Write = ({ history }) => {
  const [mode, setMode] = useState("");

  const handleMovetoWrite = () => {
    if (mode === "runner") {
      history.push("/proposal/write");
    } else {
      history.push("/request/write");
    }
  };

  const buttonProps = {
    text: "다음",
    onClick: handleMovetoWrite,
    color: mode ? "primary" : "disabled",
    disabled: !!!mode,
  };

  return (
    <CommonLayout
      pageName="글쓰기"
      showMenuButton={false}
      showBottom
      buttonProps={buttonProps}
      backgroundColor="#ffffff"
    >
      <div id="rr-write-intro">
        <div className="paragraph">
          <p>안녕하세요. 로드러너입니다.</p>
          <p>당신은 현재 러너인가요, 쇼퍼인가요?</p>
        </div>
        <div className="select-area">
          <div className="select-item">
            <ModeButton
              color={mode === "runner" ? "primary" : "default"}
              onClick={() => setMode("runner")}
            >
              Runner
            </ModeButton>
            <p className="select-text">심부름 할게요</p>
          </div>
          <div className="select-item">
            <ModeButton
              color={mode === "shopper" ? "primary" : "default"}
              onClick={() => setMode("shopper")}
            >
              Shopper
            </ModeButton>
            <p className="select-text">구매를 원해요</p>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Write;
