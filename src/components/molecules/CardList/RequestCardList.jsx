/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React, { useState, useEffect } from "react";

import Card from "@atoms/Cards/Card";

import requestModel from "@data/requestModel";

const RequestCardList = (props) => {
  const { requests, ...rest } = props;
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const result = await requestModel.getRequestList();
      console.log("result");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div {...rest}>
      <div>
        {data.map((item) => (
          <Card
            key={item.id}
            style={{ marginBottom: "15px" }}
            data={item}
            url={`/request/detail/${item.id}`}
          />
        ))}
      </div>
      <div className="list-add-button">
        <span onClick={() => fetch()}>더보기</span>
      </div>
    </div>
  );
};

export default RequestCardList;
