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
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = (props) => {
  const { data, url, footer, ...rest } = props;

  return (
    <div className="rr-card" {...props}>
      <div className="rr-card-header">
        <div className="rr-card-grade">{data.grade}</div>
        <div className="rr-card-header-content">
          <p>{data.address}</p>
          <p className="p-wname">{data.wname}</p>
        </div>
        {data.status && <div className="rr-card-status">{data.status}</div>}
      </div>
      <div className="rr-card-content">
        <Link to={url}>
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
        </Link>
      </div>
      {footer}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
    wname: PropTypes.string,
    status: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    wdate: PropTypes.string,
  }),
  footer: PropTypes.node,
};

export default Card;
