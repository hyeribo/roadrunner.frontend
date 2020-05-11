/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React from 'react';
import styled from 'styled-components';

import Card from '@components/card/Card';

const requests = [];
for(let i = 0; i < 10; i++) {
  requests.push({
    id: i,
    grade: '보통',
    address: '기숙사 A동 1층 102호',
    wname: '정다운',
    title: '마스크 사주세요.',
    content: '오늘안에 가져다주세요.',
    status: '매칭전',
    wdate: '2020-04-17 12:30',
    hits: i*10
  });
}
console.log('requests', requests)
const RequestCardList = (props) => {
  const { address, content, ...rest } = props;
  return (
    <Container>
      {
        requests.map(request => (
          <Card key={request.id} data={request} />
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  & > div {
    margin-bottom: 15px;
  }
`;


export default RequestCardList;