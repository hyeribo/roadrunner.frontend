/**
 * Home-Shopper에 보여질 요청 카드 리스트
 */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Modal, message } from "antd";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";

import requestModel from "@data/requestModel";
import proposalModel from "@data/proposalModel";
import chattingModel from "@data/chattingModel";

import ActionButton from "@atoms/Buttons/ActionButton";

const { confirm } = Modal;

// 다른 러너의 제안에 내가 심부름요청을 한 경우
// REQUESTING(요청중), MATCHED(매칭됨), DELIVERED_REQUEST(완료요청중), DELIVERED(완료)
const OtherRunnerCard = ({ data, onChatting, onComplete, t }) => {
  return (
    <Card
      style={{ marginBottom: "15px" }}
      data={{
        grade: data.runnerOrders.distance,
        address: data.runnerOrders.address,
        name: data.runnerOrders.runner.displayName,
        title: data.runnerOrders.message,
        content: data.runnerOrders.introduce,
        date: data.runnerOrders.createdAt,
        status: t(`lbl_${data.requestStatus}`),
      }}
      url={`/my/proposal/detail/${data.runnerOrders.orderId}`}
      footer={
        <div className="rr-card-footer">
          <div className="footer-left-button"></div>
          <div className="footer-right">
            {data.requestStatus !== "REQUESTING" &&
              data.requestStatus !== "DELIVERED" && (
                <ActionButton
                  color="default"
                  onClick={() =>
                    onChatting(
                      data.runnerOrders.runnerId,
                      data.shopperOrders.shopperId
                    )
                  }
                >
                  {t("lbl_chat")}
                </ActionButton>
              )}
            {data.requestStatus === "DELIVERED_REQUEST" && (
              <ActionButton
                color="primary"
                onClick={() => onComplete(data.requestId)}
              >
                {t("lbl_complete")}
              </ActionButton>
            )}
          </div>
        </div>
      }
    />
  );
};

// 나의 요청에 다른 러너가 심부름 제안을 한 경우
// REQUESTING(요청중), MATCHED(매칭됨), DELIVERED_REQUEST(완료요청중), DELIVERED(완료)
const MyRequestCard = ({ data, onChatting, onAccept, onComplete, t }) => {
  return (
    <Card
      style={{ marginBottom: "15px" }}
      data={{
        grade: t(`lbl_${data.priority}`),
        address: data.shopper.address,
        name: data.shopper.displayName,
        title: data.title,
        content: data.additionalMessage,
        date: data.createdAt,
        status: t(`lbl_${data.status}`),
      }}
      url={`/my/request/detail/${data.orderId}`}
      footer={
        <CardFooter
          onChatting={onChatting}
          order={data}
          requests={data.shopperOrderRequests}
          onAccept={onAccept}
          onComplete={onComplete}
          t={t}
        />
      }
    />
  );
};

const CardFooter = ({
  t,
  order,
  requests,
  onAccept,
  onChatting,
  onComplete,
}) => {
  if (!requests || !requests.length) return null;
  // 나의 요청일 경우
  return requests.map((request, i) => {
    return (
      <div key={i} className="rr-card-footer">
        <div className="footer-right">
          {request.requestStatus !== "REQUESTING" && (
            <ActionButton
              color="default"
              onClick={() => onChatting(order.shopperId, request.runnerId)}
            >
              {t("lbl_chatting")}
            </ActionButton>
          )}
          {request.requestStatus === "REQUESTING" && (
            <ActionButton
              color="primary"
              onClick={() => onAccept(request.requestId, request.runnerId)}
            >
              {t("lbl_accept")}
            </ActionButton>
          )}
          {request.requestStatus === "DELIVERED_REQUEST" && (
            <ActionButton
              color="primary"
              onClick={() => onComplete(request.requestId)}
            >
              {t("lbl_confirm_complete")}
            </ActionButton>
          )}
        </div>
      </div>
    );
  });
};

const MyRequestCardList = (props) => {
  const user = useSelector((state) => state.user);
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 10000,
  });

  const fetch = async () => {
    try {
      const result = await requestModel.getMyRequestList(pagination);
      setData(result);
      console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  };

  // 심부름 신청 수락
  const handleAcceptRequest = (requestId, userId) => {
    confirm({
      title: t("cfm_accept_proposal"),
      onOk: async () => {
        try {
          await requestModel.changeRequestStatus(requestId, "MATCHED");
          await chattingModel.registChattingRoom(userId);
          message.success(t("msg_accept_s"));
          setData([]);
          fetch();
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  // 내가 제안한 심부름 완료 요청
  const handleCompleteMyOrder = (requestId) => {
    confirm({
      title: t("cfm_complete"),
      onOk: async () => {
        try {
          await requestModel.changeRequestStatus(requestId, "DELIVERED");
          message.success(t("msg_complete_s"));
          fetch();
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  // 내가 요청한 심부름 완료 처리
  const handleCompleteOtherOrder = (requestId) => {
    confirm({
      title: t("cfm_complete"),
      onOk: async () => {
        try {
          await proposalModel.changeProposalStatus(requestId, "DELIVERED");
          message.success(t("msg_complete_s"));
          fetch();
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  if (!data.length)
    return (
      <div {...props}>
        <Empty text={t("lbl_no_orders")} />
      </div>
    );
  return (
    <div {...props}>
      {data.map((item, index) => {
        console.log("item", item);
        if (item.runnerOrders) {
          return (
            <OtherRunnerCard
              key={index}
              data={item}
              onChatting={props.onChatting}
              onComplete={handleCompleteOtherOrder}
              t={t}
            />
          );
        } else {
          return (
            <MyRequestCard
              key={index}
              data={item}
              onChatting={props.onChatting}
              onAccept={handleAcceptRequest}
              onComplete={handleCompleteMyOrder}
              t={t}
            />
          );
        }
      })}
    </div>
  );
};

export default MyRequestCardList;
