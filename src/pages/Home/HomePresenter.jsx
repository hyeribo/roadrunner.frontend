import React from 'react';
import styled from 'styled-components';

import RunnerShopperSwitch from '@components/button/RunnerShopperSwitch';
import RequestCardList from '@components/card/RequestCardList';


const HomePresenter = () => {
  return (
    <Wrapper>
      <div className='global-wrapper'>
        <div className='content'>
          <RunnerShopperSwitch />
          <RequestCardList />
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  .content {
    min-height: calc(100vh - 80px);
    padding: 60px 15px 80px 15px;
    background-color: #f5f5f5;
  }
`;

export default HomePresenter;