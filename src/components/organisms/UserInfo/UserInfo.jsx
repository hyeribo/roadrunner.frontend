import React from "react";
import PropTypes from "prop-types";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import moment from "moment";

import Badge from "@atoms/Badges/Badge";
import defaultProfileImg from "@assets/images/bedge-card-urgent.png";

const RunnerStatus = (props) => (
  <div className="status">
    <ul>
      <li>
        <span className="title">완료 건수</span>
        <span className="value">7건</span>
      </li>
      <li>
        <span className="title">진행중</span>
        <span className="value">1건</span>
      </li>
      <li>
        <span className="title">평점</span>
        <span className="value">4.5</span>
      </li>
      <li>
        <span className="title">리뷰</span>
        <span className="value">7개</span>
      </li>
    </ul>
  </div>
);

const ShopperStatus = ({ data }) => (
  <div className="status">
    <ul>
      <li className="status-badge">
        <Badge text={data.requestStatus} />
      </li>
      <li>
        <span className="title">받은 연락</span>
        <span className="value">{data.responseCnt}</span>
      </li>
      <li className="float-r">
        <p className="p-info">
          <CalendarOutlined />
          {moment(data.wdate).format("YYYY-MM-DD")}
          <ClockCircleOutlined />
          {moment(data.wdate).format("HH:mm")}
        </p>
      </li>
    </ul>
  </div>
);

const UserInfo = (props) => {
  const { type, userInfo, requestInfo } = props;
  return (
    <div className="rr-user-info">
      <div className="profile">
        <div className="profile-img">
          <img src={userInfo.profile_img || defaultProfileImg} />
        </div>
        <div className="profile-info">
          <p>
            <span className="name">{userInfo.name || "신부름"}</span>
            <span className="gender">{userInfo.gender || "여자"}</span>
          </p>
          <p className="address limit-line-1">
            {userInfo.address || "러너대학교 기숙사 A동"}
          </p>
          <p className="email limit-line-1">
            {userInfo.email || "runner8282@gmail.com"}
          </p>
        </div>
      </div>
      {type === "runner" ? (
        <RunnerStatus />
      ) : (
        <ShopperStatus data={requestInfo} />
      )}
    </div>
  );
};

UserInfo.propTypes = {
  type: PropTypes.oneOf(["runner", "shopper"]).isRequired,
  userInfo: PropTypes.object,
  requestInfo: PropTypes.shape({
    wdate: PropTypes.string,
    requestStatus: PropTypes.string,
    responseCnt: PropTypes.number,
  }),
};

UserInfo.defaultProps = {
  userInfo: {},
  requestInfo: {
    wdate: "2020-04-17 12:30",
    requestStatus: "배달중",
    responseCnt: 3,
  },
};

export default UserInfo;
