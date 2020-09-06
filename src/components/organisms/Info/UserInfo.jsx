import React from "react";
import PropTypes from "prop-types";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import { useTranslation } from "react-i18next";

import Badge from "@atoms/Badges/Badge";

import defaultProfileImg from "@assets/images/bedge-card-urgent.png";
import constants from "@config/constants";

const RunnerStatus = ({ userInfo, t }) => (
  <div className="status">
    <ul>
      <li>
        <span className="title">{t("lbl_count_complete")}</span>
        <span className="value">{userInfo.completedOrders || 0}</span>
      </li>
      <li>
        <span className="title">{t("lbl_ing")}</span>
        <span className="value">{userInfo.processedOrders || 0}</span>
      </li>
    </ul>
  </div>
);

const ShopperStatus = ({ order, t }) => (
  <div className="status">
    <ul>
      <li className="status-badge">
        <Badge text={t(`lbl_${order.status}`)} />
      </li>
      <li>
        <span className="title">{t("lbl_received_contact")}</span>
        <span className="value">{order.responseCnt}</span>
      </li>
      <li className="float-r">
        <p className="p-info">
          <CalendarOutlined />
          {moment(order.createdAt).format("YYYY-MM-DD")}
          <ClockCircleOutlined />
          {moment(order.createdAt).format("HH:mm")}
        </p>
      </li>
    </ul>
  </div>
);

const UserInfo = (props) => {
  const { t } = useTranslation();
  const { type, userInfo, order } = props;
  const profileImg = userInfo.profileImagePath
    ? `${process.env.REACT_APP_IMG_BASE_URL}${userInfo.profileImagePath}`
    : defaultProfileImg;

  return (
    <div className="rr-user-info">
      <div className="profile">
        <div className="profile-img">
          <img src={profileImg} />
        </div>
        <div className="profile-info">
          <p>
            <span className="name">{userInfo.displayName || "-"}</span>
            <span className="gender">
              {t(constants.GENDER_MAP[userInfo.gender] || "-")}
            </span>
          </p>
          <p className="address limit-line-1">{userInfo.address || "-"}</p>
          <p className="email limit-line-1">{userInfo.email || "-"}</p>
        </div>
      </div>
      {type === "proposal" ? (
        <RunnerStatus userInfo={userInfo} t={t} />
      ) : (
        <ShopperStatus order={order} t={t} />
      )}
    </div>
  );
};

UserInfo.propTypes = {
  type: PropTypes.oneOf(["request", "proposal"]).isRequired,
  userInfo: PropTypes.object,
  order: PropTypes.object,
};

UserInfo.defaultProps = {
  userInfo: {},
  order: {},
};

export default UserInfo;
