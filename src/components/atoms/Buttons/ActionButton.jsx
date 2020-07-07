import React from "react";
import PropTypes from "prop-types";

const MainButton = (props) => {
  const { color, children, ...rest } = props;
  return (
    <button className={`rr-action-button ${color}`} {...rest}>
      {children}
    </button>
  );
};

MainButton.propTypes = {
  color: PropTypes.oneOf([
    "default",
    "primary",
    "disabled",
    "pending",
    "black",
  ]),
};
MainButton.defaultProps = {
  color: "default",
};

export default MainButton;
