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
  const user = useSelector((state) => state.user);
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 20,
  });
  const [totalCount, setTotalCount] = useState(0);

  const fetch = async () => {
    try {
      const result = await proposalModel.getProposalList(pagination);
      setData(data.concat(result.orders));
      setTotalCount(result.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  // 더보기
  const handleClickMore = () => {
    setPagination({
      ...pagination,
      offset: pagination.offset + pagination.limit,
    });
  };

  useEffect(() => {
    fetch();
  }, [pagination]);

  return (
    <div {...props}>
      <div>
        {data.length > 0 ? (
          data.map((item) => (
            <Card
              key={`proposal-${item.orderId}`}
              style={{ marginBottom: "15px" }}
              data={{
                grade: item.distance,
                address: item.address,
                name: item.runner.displayName,
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
      {pagination.offset + pagination.limit < totalCount ? (
        <div className="list-add-button">
          <span onClick={() => handleClickMore()}>{t("lbl_more")}</span>
        </div>
      ) : null}
    </div>
  );
};

export default ProposalCardList;
