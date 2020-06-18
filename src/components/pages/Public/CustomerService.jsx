import React from "react";
import { RightOutlined } from "@ant-design/icons";

import CommonLayout from "@templates/Layouts/CommonLayout";

import iconImg from "@assets/images/service-center.png";

const CustomerService = ({ t }) => {
  return (
    <CommonLayout
      pageName={t("lbl_cs")}
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div id="rr-customer-service">
        <div className="cs-bg">
          <img src={iconImg} />
        </div>
        <div className="cs-content-wrapper">
          <div className="cs-content">
            <p className="p-title">{t("lbl_cs_time")}</p>
            <p className="p-email">service@roadrunner.com</p>
            <p className="p-worktime">
              <span className="date">{t("lbl_cs_day")} </span>
              <span className="time">09:00~18:00</span>
            </p>
            <p className="p-holiday">{t("lbl_cs_holiday")}</p>
          </div>
          <div className="list-item">
            <a href="mailto:service@roadrunner.com">
              <div className="text">{t("lbl_cs_mail")}</div>
              <div className="right">
                <RightOutlined />
              </div>
            </a>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

CustomerService.propTypes = {};

export default CustomerService;
