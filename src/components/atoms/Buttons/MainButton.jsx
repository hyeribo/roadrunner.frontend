import React from "react";
import PropTypes from "prop-types";

const MainButton = (props) => {
  const { color, children, ...rest } = props;
  return (
    <button className={`rr-main-button ${color}`} {...rest}>
      {children}
    </button>
  );
};

MainButton.propTypes = {
  color: PropTypes.oneOf(["default", "primary", "disabled", "pending"]),
};
MainButton.defaultProps = {
  color: "default",
};

export default MainButton;
