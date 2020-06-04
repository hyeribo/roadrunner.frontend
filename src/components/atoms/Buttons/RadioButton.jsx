import React from "react";
import PropTypes from "prop-types";

const RadioButton = (props) => {
  const { children, color, ...rest } = props;
  return (
    <button type="button" className={`rr-radio-button ${color}`} {...rest}>
      {children}
    </button>
  );
};

RadioButton.propTypes = {
  color: PropTypes.oneOf(["default", "primary", "disabled", "pending"]),
};
RadioButton.defaultProps = {
  color: "default",
};

export default RadioButton;
