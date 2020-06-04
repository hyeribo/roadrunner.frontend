/**
 * Runner-Shopper 스위치 버튼
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

import runnerActive from "@assets/images/switch-runner-active.png";
import runnerInactive from "@assets/images/switch-runner-inactive.png";
import runnerText from "@assets/images/switch-runner-text.png";
import shopperActive from "@assets/images/switch-shopper-active.png";
import shopperInactive from "@assets/images/switch-shopper-inactive.png";
import shopperText from "@assets/images/switch-shopper-text.png";

const RunnerActive = ({ show, onClick }) => (
  <div className={`switch-wrapper runner ${show ? "show" : "hide"}`}>
    <div className="active">
      <img src={runnerActive} />
      <img className="text" src={runnerText} />
    </div>
    <div className="inactive">
      <img src={shopperInactive} onClick={() => onClick("shopper")} />
    </div>
  </div>
);

const ShopperActive = ({ show, onClick }) => (
  <div className={`switch-wrapper shopper ${show ? "show" : "hide"}`}>
    <div className="inactive">
      <img src={runnerInactive} onClick={() => onClick("runner")} />
    </div>
    <div className="active">
      <img src={shopperActive} />
      <img className="text" src={shopperText} />
    </div>
  </div>
);

const RoleSwitch = (props) => {
  const { onChange, value, defaultValue, ...rest } = props;
  const [role, setRole] = useState(defaultValue);

  const handleChangeRole = (newRole) => {
    if (newRole === role) return;
    setRole(newRole);
    onChange(newRole);
  };

  return (
    <div className="rr-role-switch" {...rest}>
      <RunnerActive show={role === "runner"} onClick={handleChangeRole} />
      <ShopperActive show={role === "shopper"} onClick={handleChangeRole} />
    </div>
  );
};

RoleSwitch.propTypes = {
  defaultValue: PropTypes.oneOf(["runner", "shopper"]),
  onChange: PropTypes.func,
};

RoleSwitch.defaultProps = {
  defaultValue: "runner",
  onChange: () => {},
};

export default RoleSwitch;
