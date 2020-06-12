import React from "react";
import { useTranslation } from "react-i18next";
import { CustomerServiceFilled, RightOutlined } from "@ant-design/icons";

import CommonLayout from "@templates/Layouts/CommonLayout";

const CustomerService = () => {
  const { t } = useTranslation();

  const goToMail = () => {};

  return (
    <CommonLayout
      pageName={t("lbl_cs")}
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div id="rr-customer-service">
        <div className="cs-bg">
          <CustomerServiceFilled />
        </div>
        <div className="cs-content-wrapper">
          <div className="cs-content">
            <p className="p-title">고객지원 문의시간</p>
            <p className="p-email">service@roadrunner.com</p>
            <p className="p-worktime">
              <span className="date">평일 </span>
              <span className="time">09:00~18:00</span>
            </p>
            <p className="p-holiday">주말, 공휴일 휴무</p>
          </div>
          <div className="list-item" onClick={() => goToMail()}>
            <a href="mailto:service@roadrunner.com">
              <div className="text">메일로 문의하기</div>
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
