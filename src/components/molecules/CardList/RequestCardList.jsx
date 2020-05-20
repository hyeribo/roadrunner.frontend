/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React from "react";

import Card from "@atoms/Cards/Card";

const RequestCardList = (props) => {
  const { requests, ...rest } = props;
  return (
    <div {...rest}>
      {requests.map((request) => (
        <Card
          key={request.id}
          style={{ marginBottom: "15px" }}
          data={request}
          url={`/request/detail/${request.id}`}
        />
      ))}
    </div>
  );
};

export default RequestCardList;
