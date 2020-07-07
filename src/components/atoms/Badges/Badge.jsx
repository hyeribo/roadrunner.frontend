import React from "react";
import PropTypes from "prop-types";

const Badge = (props) => {
  const { text, ...rest } = props;
  return (
    <div className="rr-badge" {...rest}>
      {props.text}
    </div>
  );
};

Badge.propTypes = {
  text: PropTypes.string,
};
Badge.defaultProps = {
  text: "",
};

export default Badge;
