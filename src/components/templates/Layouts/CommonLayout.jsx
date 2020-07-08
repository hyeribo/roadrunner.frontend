import React from "react";
import PropTypes from "prop-types";

import CommonHeader from "@organisms/Headers/CommonHeader";
import CommonBottom from "@organisms/Bottoms/CommonBottom";

const CommonLayout = (props) => {
  const {
    pageName,
    showBackButton,
    showMenuButton,
    showBottom,
    buttonProps,
    backgroundColor,
    extraBottom,
    children,
    ...rest
  } = props;

  return (
    <div className="rr-common-layout" {...rest}>
      <CommonHeader
        pageName={pageName}
        showBackButton={showBackButton}
        showMenuButton={showMenuButton}
      />
      <div className="rr-common-layout-wrapper">
        <div className="global-content-wrapper">
          <div
            className="rr-common-layout-content"
            style={{
              backgroundColor,
              paddingBottom: showBottom ? "95px" : "24px",
            }}
          >
            {children}
          </div>
        </div>
      </div>
      {showBottom && (
        <CommonBottom buttonProps={buttonProps} extraBottom={extraBottom} />
      )}
    </div>
  );
};

CommonLayout.propTypes = {
  pageName: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
  showMenuButton: PropTypes.bool,
  showBottom: PropTypes.bool,
  buttonProps: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
  }),
  backgroundColor: PropTypes.string,
  extraBottom: PropTypes.node,
};

CommonLayout.defaultProps = {
  showBackButton: true,
  showMenuButton: true,
  showBottom: false,
  buttonProps: {},
  backgroundColor: "#f5f5f5",
  extraBottom: null,
};

export default CommonLayout;
