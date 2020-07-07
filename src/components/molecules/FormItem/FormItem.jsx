import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import errorMessage from "@config/constants/errorMessage";

const FormItem = (props) => {
  const { t } = useTranslation();
  const {
    label,
    labelFor,
    name,
    children,
    required,
    error,
    helpbox,
    helpboxPlacement,
    extra,
    onToggleExtra,
    ...rest
  } = props;

  return (
    <div className="rr-form-item" {...rest}>
      <div className="label-wrapper">
        <label htmlFor={labelFor}>
          <span>
            {label}
            {required && <span> *</span>}
          </span>
        </label>
        <div className="label-extra">
          {onToggleExtra && (
            <Checkbox
              style={{ display: "inline-block" }}
              onChange={(e) => onToggleExtra(e.target.checked)}
            ></Checkbox>
          )}
          <span className="help">{extra}</span>
        </div>
      </div>
      {children}
      {helpbox && (
        <div className="helpbox" style={{ textAlign: helpboxPlacement }}>
          {helpbox}
        </div>
      )}
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
  helpbox: PropTypes.string,
  helpboxPlacement: PropTypes.oneOf(["left", "right"]),
  extra: PropTypes.string,
  onToggleExtra: PropTypes.func,
  children: PropTypes.node.isRequired,
};
FormItem.defaultProps = {
  label: "",
  required: false,
  helpbox: "",
  helpboxPlacement: "left",
  extra: null,
  onToggleExtra: null,
};
export default FormItem;
