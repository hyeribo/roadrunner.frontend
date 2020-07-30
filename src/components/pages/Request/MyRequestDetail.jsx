import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CommonLayout from "@templates/Layouts/CommonLayout";
import UserInfo from "@organisms/Info/UserInfo";
import Contents from "@templates/Detail/Contents";
import TotalPrice from "@molecules/TotalPrice/TotalPrice";

import requestModel from "@data/requestModel";
import userModel from "@data/userModel";

const imageUrl = `${process.env.REACT_APP_IMG_BASE_URL}`;

const MyRequestDetail = ({ t, match }) => {
  const user = useSelector((state) => state.user);
  const [shopper, setShopper] = useState({});
  const [data, setData] = useState({
    order: {
      shopperOrderItems: [],
      shopperOrderImages: [],
    },
  });

  const fetch = async () => {
    try {
      const orderInfo = await requestModel.getRequestDetail(
        match.params.request_id
      );
      const shopperInfo = await userModel.getUserInfo(
        orderInfo.order.shopperId
      );
      setData(orderInfo);
      setShopper(shopperInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const getItemContent = (items) => {
    if (!items || !items.length) return "";

    const itemContent = items.reduce((result, arr, i) => {
      if (!i) result += `${arr.name} ${arr.count}개`;
      else result += `, ${arr.name} ${arr.count}개`;
      return result;
    }, "");
    return itemContent;
  };

  const getItemImage = (images) => {
    if (!images || !images.length) return "";

    return (
      <div className="rr-multi-upload">
        {images.map((image, i) => (
          <div className="image-wrapper" key={i}>
            <img src={`${imageUrl}${image.path}`} />
          </div>
        ))}
      </div>
    );
  };

  const getItemPrice = (items) => {
    if (!items || !items.length) return "";

    return (
      <div>
        {items.map((item, i) => (
          <p key={i}>
            {`${item.name} ${item.price.toLocaleString()}원`}
            {item.count > 1 &&
              ` (1개 ${item.price.toLocaleString() / item.count}원)`}
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
      showBottom={false}
      backgroundColor="#ffffff"
    >
      <div
        id="rr-request-detail-page"
        className="global-content-container p-t-20"
      >
        <p className="detail-title">
          {data.order.shopperId === user.userId ? "나의 요청" : "쇼퍼의 요청"}
        </p>
        <UserInfo type="request" userInfo={shopper} order={data.order} />
        <Contents
          items={[
            {
              label: "요청항목",
              content: getItemContent(data.shopperOrderItems) || "요청항목",
            },
            {
              label: "",
              content: getItemImage(data.order.shopperOrderImages) || [],
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
              content: getItemPrice(data.order.shopperOrderItems),
            },
          ]}
        />
        <TotalPrice
          price={data.order.estimatedPrice}
          tip={data.order.runnerTip}
        />
      </div>
    </CommonLayout>
  );
};

export default MyRequestDetail;
