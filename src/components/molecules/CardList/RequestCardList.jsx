/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";

import requestModel from "@data/requestModel";

const RequestCardList = (props) => {
  const { shopperId, ...rest } = props;
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      let result;
      if (shopperId) result = await requestModel.getUserRequestList(shopperId);
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
              key={`request-${item.orderId}`}
              style={{ marginBottom: "15px" }}
              data={{
                grade: item.priority,
                address: item.receiveAddress,
                name: item.shopperName,
                status: item.status,
                title: item.title,
                content: item.contents,
                date: item.createdAt,
              }}
              url={`/request/detail/${item.id}`}
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

export default RequestCardList;
