import React from "react";
import PropTypes from "prop-types";

import MainHeader from "@organisms/Headers/MainHeader";
import BottomTab from "@organisms/Bottoms/BottomTab";

const MainLayout = (props) => {
  const {
    showMenuButton,
    editable,
    onEditComplete,
    onChangeMode,
    tabName,
    backgroundColor,
    containPaddingTop,
    children,
    ...rest
  } = props;
  const style = { backgroundColor };
  if (containPaddingTop) style.paddingTop = "60px";

  return (
    <div className="rr-main-layout" {...rest}>
      <MainHeader
        showMenuButton={showMenuButton}
        editable={editable}
        onEditComplete={onEditComplete}
        onChangeMode={onChangeMode}
      />
      <div className="rr-main-layout-wrapper">
        <div className="global-content-wrapper">
          <div className="rr-main-layout-content" style={style}>
            {children}
          </div>
        </div>
      </div>
      <BottomTab tabName={tabName} />
    </div>
  );
};

MainLayout.propTypes = {
  showMenuButton: PropTypes.bool,
  editable: PropTypes.bool,
  onEditComplete: PropTypes.func,
  onChangeMode: PropTypes.func,
  tabName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  containPaddingTop: PropTypes.bool,
};

MainLayout.defaultProps = {
  showMenuButton: false,
  editable: false,
  onChangeMode: () => {},
  backgroundColor: "#f5f5f5",
  containPaddingTop: true,
};
export default MainLayout;
