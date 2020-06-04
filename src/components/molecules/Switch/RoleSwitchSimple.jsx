import React, { useState } from "react";
import PropTypes from "prop-types";

import runnerActive from "@assets/images/switch-runner-active-simple.png";
import runnerInactive from "@assets/images/switch-runner-inactive-simple.png";
import shopperActive from "@assets/images/switch-shopper-active-simple.png";
import shopperInactive from "@assets/images/switch-shopper-inactive-simple.png";

const RunnerActive = ({ show, onClick }) => (
  <div className={`switch-wrapper p-0 ${show ? "show" : "hide"}`}>
    <img src={runnerActive} />
    <div className="space"></div>
    <img src={shopperInactive} onClick={() => onClick("shopper")} />
  </div>
);

const ShopperActive = ({ show, onClick }) => (
  <div className={`switch-wrapper p-0 ${show ? "show" : "hide"}`}>
    <img src={runnerInactive} onClick={() => onClick("runner")} />
    <div className="space"></div>
    <img src={shopperActive} />
  </div>
);

const RoleSwitchSimple = (props) => {
  const { onChange, value, defaultValue, ...rest } = props;
  const [role, setRole] = useState(defaultValue);

  const handleChangeRole = (newRole) => {
    if (newRole === role) return;
    setRole(newRole);
    onChange(newRole);
  };

  return (
    <div className="rr-role-switch-simple" {...rest}>
      <RunnerActive show={role === "runner"} onClick={handleChangeRole} />
      <ShopperActive show={role === "shopper"} onClick={handleChangeRole} />
    </div>
  );
};

RoleSwitchSimple.propTypes = {
  defaultValue: PropTypes.oneOf(["runner", "shopper"]),
  onChange: PropTypes.func,
};

RoleSwitchSimple.defaultProps = {
  defaultValue: "runner",
  onChange: () => {},
};

export default RoleSwitchSimple;
