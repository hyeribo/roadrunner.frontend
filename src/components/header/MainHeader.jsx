import React from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';


const MainHeader = () => {
  return (
    <Wrapper>
      <div className='global-wrapper'>
        <div className='header-content'>
          <p className='header-title'>
            Road Runner
          </p>
          <MenuOutlined className='icon-menu' />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  .header-content {
    display: flex;
    line-height: 60px;
    height: 60px;
    padding: 0 20px;
    background-color: #ffffff;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.05);
    border-radius: 0 0 20px 20px;
  }
  .header-title {
    flex: 1;
    font-size: 23px;
    font-weight: bold;
    color: #000000;
  }
  .icon-menu {
    line-height: 70px;
    font-size: 22px;
    color: #000000;
  }
`;

export default MainHeader;