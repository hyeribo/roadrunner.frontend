/**
 * 기본 카드
 */

import React from "react";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import moment from "moment";

const Card = (props) => {
  const { data, footer, ...rest } = props;

  return (
    <div className="rr-card" {...props}>
      <div className="rr-card-header">
        <div className="rr-card-grade">{data.grade}</div>
        <div className="rr-card-header-content">
          <p>{data.address}</p>
          <p className="p-wname">{data.wname}</p>
        </div>
        <div className="rr-card-status">{data.status}</div>
      </div>
      <div className="rr-card-content">
        <p className="p-title limit-line-3">{data.title}</p>
        <p className="p-content limit-line-1">{data.content}</p>
        <p className="p-info">
          <CalendarOutlined />
          {moment(data.wdate).format("YYYY-MM-DD")}
          <ClockCircleOutlined />
          {moment(data.wdate).format("HH:mm")}
          <EyeOutlined />
          {data.hits}
        </p>
      </div>
      {footer}
    </div>
  );
};

export default Card;
