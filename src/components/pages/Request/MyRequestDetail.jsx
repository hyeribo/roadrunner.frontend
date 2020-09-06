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
      if (!i) result += `${arr.name} ${arr.count}${t("lbl_measure")}`;
      else result += `, ${arr.name} ${arr.count}${t("lbl_measure")}`;
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
            {`${item.name} ${item.price.toLocaleString()}${t("lbl_currency")}`}
            {item.count > 1 &&
              ` (1${t("lbl_measure")} ${
                item.price.toLocaleString() / item.count
              }${t("lbl_currency")})`}
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
          {data.order.shopperId === user.userId
            ? t("lbl_my_request")
            : t("lbl_shoppers_request")}
        </p>
        <UserInfo type="request" userInfo={shopper} order={data.order} />
        <Contents
          items={[
            {
              label: t("lbl_req_items"),
              content: getItemContent(data.shopperOrderItems) || "-",
            },
            {
              label: "",
              content: getItemImage(data.order.shopperOrderImages) || [],
            },
            {
              label: t("lbl_receive_time"),
              content: `${data.order.startReceiveTime} ~ ${data.order.endReceiveTime}`,
            },
            {
              label: t("lbl_receive_address"),
              content: data.order.receiveAddress,
            },
            {
              label: t("lbl_req_memo"),
              content: data.order.additionalMessage,
            },
            {
              label: t("lbl_expected_price"),
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
