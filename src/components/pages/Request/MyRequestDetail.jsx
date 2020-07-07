import React, { useState, useEffect } from "react";
import { Modal, message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import UserInfo from "@organisms/Info/UserInfo";
import Contents from "@templates/Detail/Contents";
import TotalPrice from "@molecules/TotalPrice/TotalPrice";

import requestModel from "@data/requestModel";

const { confirm } = Modal;

const MyRequestDetail = ({ t, match }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    shopper: {},
    order: {},
    orderItems: [
      {
        name: "일반 샴푸",
        count: 1,
        price: 10000,
      },
      {
        name: "고급 샴푸",
        count: 2,
        price: 30000,
      },
    ],
  });

  const fetch = async () => {
    try {
      const result = await requestModel.getMyRequestDetail(
        match.params.request_id
      );
      setData({
        ...data,
        order: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const acceptOrder = async () => {
    try {
      setLoading(true);
      await requestModel.acceptRequest(match.params.request_id);
      message.success("요청되었습니다.");
      fetch();
    } catch (error) {
      message.error("요청에 실패했습니다.");
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const getItemContent = (items) => {
    const itemContent = items.reduce((result, arr, i) => {
      if (!i) result += `${arr.name} ${arr.count}개`;
      else result += `, ${arr.name} ${arr.count}개`;
      return result;
    }, "");
    return itemContent;
  };

  const getItemPrice = (items) => {
    return (
      <div>
        {items.map((item, i) => (
          <p key={i}>
            {`${item.name} ${item.price}원`}
            {item.count > 1 && ` (1개 ${item.price / item.count}원)`}
          </p>
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetch();
  }, [match.params.request_id]);

  return (
    <CommonLayout
      pageName={t("lbl_order_detail")}
      showMenuButton={false}
      showBottom={data.order.status === "MATCHING"}
      buttonProps={{
        text: t("lbl_request"),
        onClick: () =>
          confirm({
            title: "심부름을 요청하시겠습니까?",
            onOk: acceptOrder,
          }),
        color: loading ? "disabled" : "primary",
        disabled: loading,
      }}
      backgroundColor="#ffffff"
    >
      <div
        id="rr-request-detail-page"
        className="global-content-container p-t-20"
      >
        <UserInfo type="request" userInfo={data.shopper} order={data.order} />
        <Contents
          items={[
            {
              label: "요청항목",
              content: getItemContent(data.orderItems) || "요청항목",
            },
            {
              label: "수령시간",
              content: `${data.order.startReceiveTime} ~ ${data.order.endReceiveTime}`,
            },
            {
              label: "수령장소",
              content: data.order.receiveAddress,
            },
            {
              label: "추가 요청 메세지",
              content: data.order.additionalMessage,
            },
            {
              label: "예상 가격",
              content: getItemPrice(data.orderItems),
            },
          ]}
        />
        <TotalPrice price={data.order.estimatedPrice} />
      </div>
    </CommonLayout>
  );
};

export default MyRequestDetail;
