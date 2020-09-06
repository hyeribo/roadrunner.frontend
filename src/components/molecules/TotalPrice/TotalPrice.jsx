import React from "react";
import { useTranslation } from "react-i18next";

const TotalPrice = ({ price, tip }) => {
  const { t } = useTranslation();
  return (
    <div className="rr-total-price">
      <div className="total">
        <span className="label">{t("lbl_total_price")} </span>
        <span className="price">{price ? price.toLocaleString() : 0}</span>
      </div>
      <div className="runner-tip">
        <span className="label">{t("lbl_runner_tip")} </span>
        <span className="price">{tip ? tip.toLocaleString() : 0}</span>
        <div className="helpbox">({t("lbl_help_tip_price")})</div>
      </div>
    </div>
  );
};

export default TotalPrice;
