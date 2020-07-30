/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";

import requestModel from "@data/requestModel";

const RequestCardList = (props) => {
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
      const result = await requestModel.getRequestList(pagination);
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
              key={`request-${item.orderId}`}
              style={{ marginBottom: "15px" }}
              data={{
                grade: t(`lbl_${item.priority}`),
                gradeColor: item.priority,
                address: item.receiveAddress,
                name: item.shopperName,
                status: t(`lbl_${item.status}`),
                title: item.title,
                content: item.additionalMessage,
                date: item.createdAt,
              }}
              url={
                item.shopperId === user.userId
                  ? `my/request/detail/${item.orderId}`
                  : `/request/detail/${item.orderId}`
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

export default RequestCardList;
