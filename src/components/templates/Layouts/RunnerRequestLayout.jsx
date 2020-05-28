import React from "react";

import RunnerRequestHeader from "@organisms/Headers/RunnerRequestHeader";
import BottomTab from "@organisms/Bottoms/BottomTab";

const RunnerRequestLayout = (props) => {
  return (
    <div className="rr-runnerrequest-layout">
      <RunnerRequestHeader />
      <div className="rr-runnerrequest-layout-wrapper">
        <div className="global-content-wrapper">
          <div className="rr-runnerrequest-layout-content">
            {props.children}
          </div>
        </div>
      </div>
      <BottomTab tabName={props.tabName} />
    </div>
  );
};

export default RunnerRequestLayout;
