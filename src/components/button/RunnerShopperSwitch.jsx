/**
 * Runner-Shopper 스위치 버튼
 */

import React from 'react';
import styled from 'styled-components';
import { Radio } from 'antd';

const RunnerShopperSwitch = (props) => {
  return (
    <Container>
      <Radio.Group defaultValue='r' size="large" buttonStyle='solid' {...props}>
        <Radio.Button value='r'>Runner</Radio.Button>
        <Radio.Button value='s'>Shopper</Radio.Button>
      </Radio.Group>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  text-align: center;
`;

export default RunnerShopperSwitch;