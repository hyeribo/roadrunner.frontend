/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Modal, message } from "antd";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";
import ActionButton from "@atoms/Buttons/ActionButton";

import requestModel from "@data/requestModel";
import proposalModel from "@data/proposalModel";
import chattingModel from "@data/chattingModel";

const { confirm } = Modal;

// 다른 쇼퍼의 요청에 내가 심부름제안을 한 경우
// REQUESTING(요청중), MATCHED(매칭됨), DELIVERED_REQUEST(완료요청중), DELIVERED(완료)
const OtherShopperCard = ({ data, onChatting, onCompleteRequest }) => {
  const { t } = useTranslation();
  return (
    <Card
      style={{ marginBottom: "15px" }}
      data={{
        grade: t(`lbl_${data.shopperOrders.priority}`),
        address: data.shopperOrders.shopper.address,
        name: data.shopperOrders.shopper.displayName,
        title: data.shopperOrders.title,
        content: data.shopperOrders.additionalMessage,
        date: data.shopperOrders.createdAt,
        status: t(`lbl_${data.shopperOrders.status}`),
      }}
      url={`/my/request/detail/${data.shopperOrders.orderId}`}
      footer={
        <div className="rr-card-footer">
          <div className="footer-left-button"></div>
          <div className="footer-right">
            {data.requestStatus !== "REQUESTING" && (
              <ActionButton
                color="default"
                onClick={() =>
                  onChatting(data.runnerId, data.shopperOrders.shopperId)
                }
              >
                채팅
              </ActionButton>
            )}
            {data.requestStatus === "REQUESTING" && (
              <ActionButton color="pending" disabled>
                요청중
              </ActionButton>
            )}
            {data.requestStatus === "MATCHED" && (
              <ActionButton
                color="primary"
                onClick={() => onCompleteRequest(data.requestId)}
              >
                완료요청
              </ActionButton>
            )}
            {data.requestStatus === "DELIVERED_REQUEST" && (
              <ActionButton color="pending" disabled>
                완료요청중
              </ActionButton>
            )}
            {data.requestStatus === "DELIVERED" && (
              <ActionButton color="pending" disabled>
                완료
              </ActionButton>
            )}
          </div>
        </div>
      }
    />
  );
};

// 나의 제안에 다른 쇼퍼가 요청을 한 경우
// REQUESTING(요청중), MATCHED(매칭됨), DELIVERED_REQUEST(완료요청중), DELIVERED(완료)
const MyProposalCard = ({ data, onChatting, onAccept, onCompleteRequest }) => {
  return (
    <Card
      style={{ marginBottom: "15px" }}
      data={{
        grade: data.distance,
        address: data.address,
        name: data.runner && data.runner.displayName,
        title: data.message,
        content: data.introduce,
        date: data.createdAt,
      }}
      url={`/my/proposal/detail/${data.orderId}`}
      footer={
        <CardFooter
          onChatting={onChatting}
          order={data}
          requests={data.runnerOrderRequests}
          onAccept={onAccept}
          onCompleteRequest={onCompleteRequest}
        />
      }
    />
  );
};

const CardFooter = ({
  order,
  requests,
  onAccept,
  onChatting,
  onCompleteRequest,
}) => {
  return requests.map((request, i) => {
    return (
      <div key={i} className="rr-card-footer">
        <div className="footer-left">
          <span className="text-name">{request.shopper.displayName}의 </span>
          <span className="text-blue">심부름 신청</span>
        </div>
        <div className="footer-right">
          {request.requestStatus !== "REQUESTING" && (
            <ActionButton
              color="default"
              onClick={() => onChatting(order.runnerId, request.shopperId)}
            >
              채팅
            </ActionButton>
          )}
          {request.requestStatus === "REQUESTING" && (
            <ActionButton
              color="primary"
              onClick={() => onAccept(request.requestId, request.shopperId)}
            >
              수락하기
            </ActionButton>
          )}
          {request.requestStatus === "MATCHED" && (
            <ActionButton
              color="primary"
              onClick={() => onCompleteRequest(request.requestId)}
            >
              완료요청
            </ActionButton>
          )}
          {request.requestStatus === "DELIVERED_REQUEST" && (
            <ActionButton color="pending" disabled>
              완료요청중
            </ActionButton>
          )}
          {request.requestStatus === "DELIVERED" && (
            <ActionButton color="pending" disabled>
              완료
            </ActionButton>
          )}
        </div>
      </div>
    );
    // }
  });
};

const MyProposalCardList = (props) => {
  const user = useSelector((state) => state.user);
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 10000,
  });

  const fetch = async () => {
    try {
      const result = await proposalModel.getMyProposalList(pagination);
      setData(result);
      console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  };

  // 심부름 요청 수락
  const handleAcceptRequest = (proposalId, userId) => {
    confirm({
      title: "심부름 제안을 수락하시겠습니까?",
      onOk: async () => {
        try {
          await proposalModel.changeProposalStatus(proposalId, "MATCHED");
          await chattingModel.registChattingRoom(userId);
          message.success("수락되었습니다.");
          fetch();
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  // 내가 요청한 심부름 완료 요청
  const handleCompleteMyRequest = (requestId) => {
    confirm({
      title: "심부름 완료 요청하시겠습니까?",
      onOk: async () => {
        try {
          await requestModel.changeRequestStatus(
            requestId,
            "DELIVERED_REQUEST"
          );
          message.success("요청되었습니다.");
          fetch();
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  // 내가 제안한 심부름 완료 요청
  const handleCompleteOtherRequest = (requestId) => {
    confirm({
      title: "심부름 완료 요청하시겠습니까?",
      onOk: async () => {
        try {
          await proposalModel.changeProposalStatus(
            requestId,
            "DELIVERED_REQUEST"
          );
          message.success("요청되었습니다.");
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
        if (item.shopperOrders) {
          return (
            <OtherShopperCard
              key={index}
              data={item}
              onChatting={props.onChatting}
              onCompleteRequest={handleCompleteMyRequest}
            />
          );
        } else {
          return (
            <MyProposalCard
              key={index}
              data={item}
              onChatting={props.onChatting}
              onAccept={handleAcceptRequest}
              onCompleteRequest={handleCompleteOtherRequest}
            />
          );
        }
      })}
    </div>
  );
};

export default MyProposalCardList;
