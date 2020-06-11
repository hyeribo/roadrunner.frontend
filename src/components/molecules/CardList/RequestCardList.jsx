/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React, { useState, useEffect } from "react";

import Card from "@atoms/Cards/Card";

const RequestCardList = (props) => {
  const { requests, ...rest } = props;
  const [data, setData] = useState([]);

  const fetch = async () => {
    const newData = [];
    try {
      for (let i = 0; i < 10; i++) {
        newData.push({
          id: i,
          grade: "보통",
          address: "기숙사 A동 1층 102호",
          wname: "정다운",
          title: "마스크 사주세요.",
          content: "오늘안에 가져다주세요.",
          status: "매칭전",
          wdate: "2020-04-17 12:30",
          hits: i * 10,
        });
      }
      setData(data.concat(newData));
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
