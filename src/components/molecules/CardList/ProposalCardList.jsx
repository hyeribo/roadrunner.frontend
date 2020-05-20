/**
 * Home-Shopper에 보여질 제안 카드 리스트
 */

import React from "react";

import Card from "@atoms/Cards/Card";

const ProposalCardList = (props) => {
  const { proposals, ...rest } = props;
  return (
    <div {...rest}>
      {proposals.map((proposal) => (
        <Card
          key={proposal.id}
          style={{ marginBottom: "15px" }}
          data={proposal}
          url={`/proposal/detail/${proposal.id}`}
        />
      ))}
    </div>
  );
};

export default ProposalCardList;
