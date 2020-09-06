import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import UserInfo from "@organisms/Info/UserInfo";
import Contents from "@templates/Detail/Contents";
import TotalPrice from "@molecules/TotalPrice/TotalPrice";

import requestModel from "@data/requestModel";
import userModel from "@data/userModel";

const { confirm } = Modal;

const imageUrl = `${process.env.REACT_APP_IMG_BASE_URL}`;

const RequestDetail = ({ t, match }) => {
  const user = useSelector((state) => state.user);
  const [shopper, setShopper] = useState({});
  const [data, setData] = useState({
    order: {
      shopperOrderItems: [],
      shopperOrderImages: [],
    },
  });
  const [requestStatus, setRequestStatus] = useState("ORDER");

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
      setRequestInfo(orderInfo.shopperOrderRequests);
    } catch (error) {
      console.log(error);
    }
  };

  const setRequestInfo = (requests) => {
    if (!requests || !requests.length) return;

    const index = requests.findIndex((req) => req.runnerId === user.userId);
    if (index >= 0) {
      setRequestStatus(requests[index].requestStatus);
    }
  };

  const acceptOrder = async () => {
    try {
      await requestModel.acceptRequest(match.params.request_id);
      message.success(t("msg_req_write_s"));
      fetch();
    } catch (error) {
      message.error(t("msg_req_write_f"));
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
      showBottom={data.order.status === "MATCHING"}
      buttonProps={{
        text: t(`lbl_request_${requestStatus}`),
        onClick: () =>
          confirm({
            title: t("cfm_request_delivery"),
            onOk: acceptOrder,
          }),
        color: requestStatus !== "ORDER" ? "pending" : "primary",
        disabled: requestStatus !== "ORDER",
      }}
      backgroundColor="#ffffff"
    >
      <div
        id="rr-request-detail-page"
        className="global-content-container p-t-20"
      >
        <UserInfo type="request" userInfo={shopper} order={data.order} />
        <Contents
          items={[
            {
              label: t("lbl_req_items"),
              content: getItemContent(data.order.shopperOrderItems) || [],
            },
            {
              label: "",
              content: getItemImage(data.order.shopperOrderImages) || [],
            },
            {
              label: t("lbl_receive_time"),
              content: (
                <div>
                  <span>
                    {data.order.startReceiveTime} ~ {data.order.endReceiveTime}
                  </span>
                  {!data.order.discussYn && (
                    <span className="help m-l-10">{t("lbl_consult")}</span>
                  )}
                </div>
              ),
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
              content: getItemPrice(data.order.shopperOrderItems || []),
            },
          ]}
        />
        <TotalPrice
          price={data.order.estimatedPrice || 0}
          tip={data.order.runnerTip || 0}
        />
      </div>
    </CommonLayout>
  );
};

export default RequestDetail;
