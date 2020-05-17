import React from "react";

import MainHeader from "@organisms/Headers/MainHeader";
import BottomTab from "@organisms/Bottoms/BottomTab";

const MainLayout = (props) => {
  return (
    <div className="rr-main-layout">
      <MainHeader />
      <div className="rr-main-layout-wrapper">
        <div className="global-content-wrapper">
          <div className="rr-main-layout-content">{props.children}</div>
        </div>
      </div>
      <BottomTab />
    </div>
  );
};

export default MainLayout;
