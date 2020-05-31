import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";

import MainButton from "@atoms/Buttons/MainButton";

const CommonLayoutHeader = (props) => {
  const { pageName, showBackButton, showMenuButton } = props;
  const history = useHistory();

  return (
    <div className="rr-common-header">
      <div className="global-content-wrapper">
        <div className="content">
          {showBackButton && (
            <ArrowLeftOutlined
              className="header-icon"
              onClick={history.goBack}
            />
          )}
          <p className="title">{pageName}</p>
          {showMenuButton && <MenuOutlined className="header-icon" />}
        </div>
      </div>
    </div>
  );
};

const CommonLayoutBottom = (props) => {
  const { text, ...rest } = props.buttonProps;
  return (
    <div className="rr-common-bottom">
      <div className="global-content-wrapper">
        <div className="bottom-content">
          <MainButton {...rest}>{text}</MainButton>
        </div>
      </div>
    </div>
  );
};
const CommonLayout = (props) => {
  const {
    pageName,
    showBackButton,
    showMenuButton,
    showBottom,
    buttonProps,
    backgroundColor,
    children,
    ...rest
  } = props;

  return (
    <div className="rr-common-layout" {...rest}>
      <CommonLayoutHeader
        pageName={pageName}
        showBackButton={showBackButton}
        showMenuButton={showMenuButton}
      />
      <div className="rr-common-layout-wrapper">
        <div className="global-content-wrapper">
          <div className="rr-common-layout-content" style={{ backgroundColor }}>
            {children}
          </div>
        </div>
      </div>
      {showBottom && <CommonLayoutBottom buttonProps={buttonProps} />}
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
};

CommonLayout.defaultProps = {
  showBackButton: true,
  showMenuButton: true,
  showBottom: false,
  buttonProps: {},
  backgroundColor: "#f5f5f5",
};

export default CommonLayout;
