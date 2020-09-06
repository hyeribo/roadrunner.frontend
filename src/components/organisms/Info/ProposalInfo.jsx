import React from "react";
import PropTypes from "prop-types";
import {
  DatabaseOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  RadarChartOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const paymentsKey = {
  현금결제: "lbl_cash",
  계좌이체: "lbl_bank",
};

const ProposalInfo = ({ userInfo, order }) => {
  const { t } = useTranslation();

  return (
    <div className="rr-proposal-info">
      <div className="info-item">
        <span>
          <DatabaseOutlined />
        </span>
        <span>{t("lbl_career", { count: userInfo.completedOrders || 0 })}</span>
      </div>
      <div className="info-item">
        <span>
          <EnvironmentOutlined />
        </span>
        <span>{order.address}</span>
      </div>
      <div className="info-item">
        <span>
          <RadarChartOutlined />
        </span>
        <span>{t("lbl_movable", { distance: order.distance || 0 })}</span>
      </div>
      <div className="info-item">
        <span>
          <ClockCircleOutlined />
        </span>
        <span>{`${order.startContactableTime} ~ ${order.endContactableTime}`}</span>
      </div>
      <div className="info-item">
        <span>
          <CreditCardOutlined />
        </span>
        <span>{t(paymentsKey[order.payments])}</span>
      </div>
    </div>
  );
};

ProposalInfo.propTypes = {
  userInfo: PropTypes.object,
  order: PropTypes.object,
};

ProposalInfo.defaultProps = {
  userInfo: {},
  order: {},
};

export default ProposalInfo;
