/**
 * Runner-Shopper 스위치 버튼
 */

import React from "react";
import { Radio } from "antd";

const RoleSwitch = (props) => {
  const { onChange, value, ...rest } = props;
  return (
    <div className="rr-role-switch" {...rest}>
      <Radio.Group
        defaultValue="r"
        size="large"
        buttonStyle="solid"
        onChange={onChange}
        value={value}
      >
        <Radio.Button value="runner">Runner</Radio.Button>
        <Radio.Button value="shopper">Shopper</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default RoleSwitch;
