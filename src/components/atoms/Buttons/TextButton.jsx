import React from "react";
import PropTypes from "prop-types";

const TextButton = (props) => {
  const { underline, children, ...rest } = props;
  return (
    <button className={`rr-text-button ${underline && "underline"}`} {...rest}>
      {props.children}
    </button>
  );
};

TextButton.propTypes = {
  underline: PropTypes.bool,
};
TextButton.defaultProps = {
  underline: false,
};

export default TextButton;
