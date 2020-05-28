import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const RunnerRequestHeader = () => {
  return (
    <div className="rr-runnerrequest-header">
      <div className="global-content-wrapper">
        <div className="content">
          <Link to="/home">
            <ArrowLeftOutlined className="icon-menu" />
          </Link>
          <p className="title">요청하기</p>
        </div>
      </div>
    </div>
  );
};

export default RunnerRequestHeader;
