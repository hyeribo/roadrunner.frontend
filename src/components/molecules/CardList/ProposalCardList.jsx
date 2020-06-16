/**
 * Home-Shopper에 보여질 제안 카드 리스트
 */

import React, { useState, useEffect } from "react";

import Card from "@atoms/Cards/Card";

import proposalModel from "@data/proposalModel";

const ProposalCardList = (props) => {
  const { my, ...rest } = props;
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const result = await proposalModel.getProposalList();
      console.log("result", result);
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
