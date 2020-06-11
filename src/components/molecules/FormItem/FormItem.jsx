import React from "react";
import PropTypes from "prop-types";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import errorMessage from "@config/constants/errorMessage";

const FormItem = (props) => {
  const { t } = useTranslation();
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
          {errorMessage[name] && t(errorMessage[name][error.type])}
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
