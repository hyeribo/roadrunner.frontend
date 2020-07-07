import React from "react";
import { useDispatch } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";

import Sidebar from "@organisms/Sidebar/Sidebar";

import { toggleFilter } from "@modules/filter/filterActions";

const MainHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className="rr-main-header">
      <div className="global-content-wrapper">
        <div className="content">
          <p className="title">Road Runner</p>
          <MenuOutlined
            className="icon-menu"
            onClick={() => dispatch(toggleFilter())}
          />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default MainHeader;
