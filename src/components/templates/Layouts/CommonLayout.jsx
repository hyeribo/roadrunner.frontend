import React from "react";

import CommonHeader from "@organisms/Headers/CommonHeader";
import CommonBottom from "@organisms/Bottoms/CommonBottom";

const CommonLayout = (props) => {
  return (
    <div className="rr-common-layout">
      <CommonHeader />
      <div className="rr-common-layout-wrapper">
        <div className="global-content-wrapper">
          <div className="rr-common-layout-content">{props.children}</div>
        </div>
      </div>
      {props.bottomButtons && props.bottomButtons.length && (
        <CommonBottom buttons={props.bottomButtons} />
      )}
    </div>
  );
};

export default CommonLayout;
