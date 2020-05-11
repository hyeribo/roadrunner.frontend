import React from 'react';
import styled from 'styled-components';
import { HomeOutlined, ProfileOutlined, MessageOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const MainBottom = () => {
  return (
    <Wrapper>
      <div className='global-wrapper'>
        <div className='bottom-content'>
          <TabItem active>
            <Link to='/main'>
              <HomeOutlined />
              <p className='bottom-text'>홈</p>
            </Link>
          </TabItem>
          <TabItem>
            <Link to='/main/mypage'>
              <ProfileOutlined />
              <p className='bottom-text'>나의요청</p>
            </Link>
          </TabItem>
          <TabItem>
            <div className='circle-plus'>
              <PlusOutlined />
            </div>
          </TabItem>
          <TabItem>
            <Link to='/main/mypage'>
              <MessageOutlined />
              <p className='bottom-text'>채팅</p>
            </Link>
          </TabItem>
          <TabItem>
            <Link to='/main/mypage'>
              <UserOutlined />
              <p className='bottom-text'>마이페이지</p>
            </Link>
          </TabItem>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #ffffff;

  .bottom-content {
    display: flex;
    height: 80px;
    padding: 0 10px;
    box-shadow: 0px -5px 20px 0px rgba(45, 45, 45, 0.14);
    /* box-shadow: 0 -6px 12px 0 rgba(0,0,0,0.05); */
  }
  .circle-plus {
    width: 60px;
    height: 60px;
    line-height: 56px;
    margin: auto;
    margin-top: -30px;
    border-radius: 30px;
    border: 4px solid #ffffff;
    color: #ffffff;
    background-color: #375fff;
    background: linear-gradient(to right, #0084ff, #375fff);
  }
`;

const TabItem = styled.div`
  flex: 1;
  text-align: center;
  font-size: 24px;
  padding: 16px 0;
  a {
    color: ${ props => props.active ? '#0084ff' : '#bac6d2' };
  }
  /* color: ${ props => props.active ? '#0084ff' : '#bac6d2' }; */
  .bottom-text {
    font-size: 12px;
    margin-top: 8px;
    color: ${ props => props.active ? '#0084ff' : '#bac6d2' };
  }
`;

export default MainBottom;