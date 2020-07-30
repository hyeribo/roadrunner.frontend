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

import Badge from "@atoms/Badges/Badge";

const Card = (props) => {
  const { data, url, footer, ...rest } = props;

  return (
    <div className="rr-card" {...props}>
      <div className="rr-card-header">
        <div className={`rr-card-grade ${data.gradeColor}`}>{data.grade}</div>
        <div className="rr-card-header-content">
          <p>{data.address}</p>
          <p className="p-name">{data.name}</p>
        </div>
        {data.status && (
          <Badge text={data.status} style={{ marginTop: "8px" }} />
        )}
      </div>
      <div className="rr-card-content">
        <Link to={url}>
          <p className="p-title limit-line-3">{data.title}</p>
          <p className="p-content limit-line-1">{data.content}</p>
          <p className="p-info">
            <CalendarOutlined />
            {moment(data.date).format("YYYY-MM-DD")}
            <ClockCircleOutlined />
            {moment(data.date).format("HH:mm")}
          </p>
        </Link>
      </div>
      {footer}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    grade: PropTypes.string,
    gradeColor: PropTypes.string,
    address: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
  }),
  footer: PropTypes.node,
};

export default Card;
