import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { color, children, ...rest } = props;
  return (
    <button className={`rr-button ${color}`} {...rest}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["default", "primary", "disabled", "pending"]),
};
Button.defaultProps = {
  color: "default",
};

export default Button;
