import React from "react";
import PropTypes from "prop-types";

const Step = (props) => {
  const { start, size, current, onChange, ...rest } = props;
  return (
    <div className="rr-step" {...rest}>
      {Array(size)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className={`rr-step-item ${current === index + start && "active"}`}
            onClick={() => onChange(index + start)}
          >
            {index + start}
          </div>
        ))}
    </div>
  );
};

Step.propTypes = {
  start: PropTypes.number,
  size: PropTypes.number.isRequired,
  current: PropTypes.number,
  onChange: PropTypes.func,
};
Step.defaultProps = {
  start: 0,
  current: 0,
  onChange: () => {},
};
export default Step;
