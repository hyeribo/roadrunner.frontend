import React from "react";
import PropTypes from "prop-types";

const ModeButton = (props) => {
  const { color, children, ...rest } = props;
  return (
    <button className={`rr-mode-button ${color}`} {...rest}>
      {children}
    </button>
  );
};

ModeButton.propTypes = {
  color: PropTypes.oneOf(["default", "primary", "disabled", "pending"]),
};
ModeButton.defaultProps = {
  color: "default",
};

export default ModeButton;
