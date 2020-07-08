import React from "react";
import { useTranslation } from "react-i18next";

import MainButton from "@atoms/Buttons/MainButton";

const CommonBottom = ({ buttonProps, extraBottom }) => {
  const { text, ...rest } = buttonProps;
  return (
    <div className="rr-common-bottom">
      <div className="global-content-wrapper">
        <div className="bottom-content">
          {extraBottom ? (
            extraBottom
          ) : (
            <MainButton {...rest}>{text}</MainButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonBottom;
