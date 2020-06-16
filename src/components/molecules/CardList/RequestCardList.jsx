/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";

import requestModel from "@data/requestModel";

const RequestCardList = (props) => {
  const { my, ...rest } = props;
  const userId = useSelector((state) => state.user.userId);

  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      let result;
      if (my) result = await requestModel.getMyRequestList(userId);
      else result = await requestModel.getRequestList();

      setData(result);
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
        {data.length > 0 ? (
          data.map((item) => (
            <Card
              key={item.orderId}
              style={{ marginBottom: "15px" }}
              data={item}
              url={`/request/detail/${item.id}`}
            />
          ))
        ) : (
          <Empty text={"심부름 목록이 없습니다."} />
        )}
      </div>
      {data.length ? (
        <div className="list-add-button">
          <span onClick={() => fetch()}>더보기</span>
        </div>
      ) : null}
    </div>
  );
};

export default RequestCardList;
