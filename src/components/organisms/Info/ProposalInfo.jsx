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

const ProposalInfo = ({ userInfo, order }) => {
  const { t } = useTranslation();

  return (
    <div className="rr-proposal-info">
      <div className="info-item">
        <span>
          <DatabaseOutlined />
        </span>
        <span>{userInfo.count || 0}회 완료 경력</span>
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
        <span>{order.distance} 이동 가능</span>
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
        <span>{order.payments}</span>
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
