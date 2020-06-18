/**
 * Home-Shopper에 보여질 제안 카드 리스트
 */

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";

import proposalModel from "@data/proposalModel";

const ProposalCardList = (props) => {
  const { runnerId, ...rest } = props;
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      let result;
      if (runnerId) result = await proposalModel.getUserProposalList(runnerId);
      else result = await proposalModel.getProposalList();
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
              key={`proposal-${item.orderId}`}
              style={{ marginBottom: "15px" }}
              data={{
                grade: item.distance,
                address: item.address,
                name: item.runnerName,
                title: item.message,
                content: item.introduce,
                date: item.createdAt,
              }}
              url={`/proposal/detail/${item.id}`}
            />
          ))
        ) : (
          <Empty text={t("lbl_no_orders")} />
        )}
      </div>
      {data.length ? (
        <div className="list-add-button">
          <span onClick={() => fetch()}>{t("lbl_more")}</span>
        </div>
      ) : null}
    </div>
  );
};

export default ProposalCardList;
