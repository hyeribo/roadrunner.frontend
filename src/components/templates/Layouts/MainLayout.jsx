import React from "react";
import PropTypes from "prop-types";

import MainHeader from "@organisms/Headers/MainHeader";
import BottomTab from "@organisms/Bottoms/BottomTab";

const MainLayout = (props) => {
  const { tabName, backgroundColor, children, ...rest } = props;

  return (
    <div className="rr-main-layout" {...rest}>
      <MainHeader />
      <div className="rr-main-layout-wrapper">
        <div className="global-content-wrapper">
          <div className="rr-main-layout-content" style={{ backgroundColor }}>
            {children}
          </div>
        </div>
      </div>
      <BottomTab tabName={tabName} />
    </div>
  );
};

MainLayout.propTypes = {
  tabName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

MainLayout.defaultProps = {
  backgroundColor: "#f5f5f5",
};
export default MainLayout;
