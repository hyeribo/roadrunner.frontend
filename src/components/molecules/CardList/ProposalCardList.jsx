/**
 * Home-Shopper에 보여질 제안 카드 리스트
 */

import React, { useState, useEffect } from "react";

import Card from "@atoms/Cards/Card";

const ProposalCardList = (props) => {
  const { proposals, ...rest } = props;
  const [data, setData] = useState([]);

  const fetch = async () => {
    const newData = [];
    try {
      for (let i = 0; i < 10; i++) {
        newData.push({
          id: i,
          grade: "우수",
          address: "러너구 러너동 1004번지",
          wname: "김러너",
          title: "필요한게 있으면 알려주세요.",
          content: "ABC마트 2시에 방문 예정",
          wdate: "2020-04-20 12:30",
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
            url={`/proposal/detail/${item.id}`}
          />
        ))}
      </div>
      <div className="list-add-button">
        <span onClick={() => fetch()}>더보기</span>
      </div>
    </div>
  );
};

export default ProposalCardList;
