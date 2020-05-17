/**
 * Runner-Shopper 스위치 버튼
 */

import React from "react";
import { Radio } from "antd";

const RoleSwitch = (props) => {
  return (
    <div className="rr-role-switch" {...props}>
      <Radio.Group defaultValue="r" size="large" buttonStyle="solid">
        <Radio.Button value="r">Runner</Radio.Button>
        <Radio.Button value="s">Shopper</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default RoleSwitch;
