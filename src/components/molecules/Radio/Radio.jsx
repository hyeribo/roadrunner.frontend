import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import RadioButton from "@atoms/Buttons/RadioButton";

const Radio = (props) => {
  const { initialValue, options, onChange, gutter, ...rest } = props;
  const [state, setState] = useState(initialValue);

  const handleChange = (value) => {
    setState(value);
  };

  useEffect(() => {
    onChange(state);
  }, [state]);

  return (
    <Row gutter={gutter} className="rr-radio" {...rest}>
      {options.map((option) => (
        <Col key={option.key} span={option.span || 6}>
          <RadioButton
            color={option.value === state ? "primary" : "default"}
            onClick={() => handleChange(option.value)}
          >
            {option.label}
          </RadioButton>
        </Col>
      ))}
    </Row>
  );
};

Radio.propTypes = {
  initialValue: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.any,
      span: PropTypes.number,
    })
  ).isRequired,
  onChange: PropTypes.func,
  gutter: PropTypes.arrayOf(PropTypes.number),
};
Radio.defaultProps = {
  initialValue: null,
  onChange: () => {},
  gutter: [8, 8],
};

export default Radio;
