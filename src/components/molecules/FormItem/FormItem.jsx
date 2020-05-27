import React from "react";
import PropTypes from "prop-types";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import errorMessage from "@config/constants/errorMessage";

const FormItem = (props) => {
  const { label, labelFor, name, children, required, error, ...rest } = props;
  return (
    <div className="rr-form-item" {...rest}>
      <label htmlFor={labelFor}>
        {label}
        {required && <span> *</span>}
      </label>
      {children}
      {error && (
        <div className="error">
          <ExclamationCircleOutlined />
          &nbsp;
          {errorMessage[name] && errorMessage[name][error.type]}
        </div>
      )}
    </div>
  );
};

FormItem.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
FormItem.defaultProps = {
  label: "",
  required: false,
};
export default FormItem;
