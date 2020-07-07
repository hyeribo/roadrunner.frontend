/**
 * Home-Shopper에 보여질 제안 카드 리스트
 */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";

import proposalModel from "@data/proposalModel";

const ProposalCardList = (props) => {
  const { runnerId, ...rest } = props;
  const user = useSelector((state) => state.user);
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 20,
    showMore: false,
  });

  const fetch = async () => {
    try {
      let result;
      if (runnerId)
        result = await proposalModel.getUserProposalList(runnerId, pagination);
      else result = await proposalModel.getProposalList(pagination);
      setPagination({
        ...pagination,
        offset: pagination.offset + pagination.limit,
      });
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
              url={
                item.runnerId === user.userId
                  ? `my/proposal/detail/${item.orderId}`
                  : `/proposal/detail/${item.orderId}`
              }
            />
          ))
        ) : (
          <Empty text={t("lbl_no_orders")} />
        )}
      </div>
      {pagination.showMore ? (
        <div className="list-add-button">
          <span onClick={() => fetch()}>{t("lbl_more")}</span>
        </div>
      ) : null}
    </div>
  );
};

export default ProposalCardList;
