/**
 * 기본 카드
 */

import React from 'react';
import styled from 'styled-components';
import { CalendarOutlined, ClockCircleOutlined, EyeOutlined } from '@ant-design/icons';
import moment from 'moment';


const Card = (props) => {
  const { data, footer, ...rest } = props;

  return (
    <Container {...props}>
      <div className='card-header'>
        <Grade>
          { data.grade }
        </Grade>
        <div className='card-header-content'>
          <p>{ data.address }</p>
          <p className='p-wname'>{ data.wname }</p>
        </div>
        <Status>
          { data.status }
        </Status>
      </div>
      <div className='card-content'>
        <p className='p-title limit-line-3'>{ data.title }</p>
        <p className='p-content limit-line-1'>{ data.content }</p>
        <p className='p-info'>
          <CalendarOutlined />
          { moment(data.wdate).format('YYYY-MM-DD') }
          <ClockCircleOutlined />
          { moment(data.wdate).format('HH:mm') }
          <EyeOutlined />
          { data.hits }
        </p>
      </div>
      { footer }
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);

  .card-header {
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid #dae0ec;
    .card-header-content {
      padding: 4px 10px 0 10px;
      flex: 1;
      p {
        line-height: 20px;
        font-size: 14px;
      }
      .p-wname {
        color: #9e9e9e;
      }
    }
  }
  .card-content {
    padding: 15px 20px 0 20px;
    .p-title {
      line-height: 22px;
      margin-bottom: 12px;
    }
    .p-content {
      font-size: 13px;
      color: #7db0ed;
      margin-bottom: 18px;
    }
    .p-info {
      font-size: 13px;
      color: #9e9e9e;
      margin-left: -8px;
      span {
        margin: 0 4px 0 8px;
      }
    }
  }
`;

const Grade = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: lightblue;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
`;

const Status = styled.span`
  height: fit-content;
  padding: 5px 10px;
  margin-top: 8px;
  border: 1px solid #0084ff;
  border-radius: 12px;
  font-size: 13px;
  color: #0084ff;
`;

export default Card;