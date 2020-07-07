import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { MessageOutlined, CheckCircleOutlined } from "@ant-design/icons";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";
import ActionButton from "@atoms/Buttons/ActionButton";

import proposalModel from "@data/proposalModel";

const CardFooter = ({
  myUserId,
  order,
  requests,
  onDelete,
  onAccept,
  onChat,
  onComplete,
}) => {
  // 나의 제안일 경우
  if (order.runnerId === myUserId) {
    return requests.map((request, i) => {
      if (request.status === "WAITING") {
        return (
          <div key={i} className="rr-card-footer">
            <div className="footer-left">
              <span className="text-name">{request.userName}의 </span>
              <span className="text-blue">심부름 신청</span>
            </div>
            <div className="footer-right">
              <ActionButton
                color="black"
                onClick={() => onDelete(order.orderId, request.userId)}
              >
                삭제
              </ActionButton>
              <ActionButton
                color="primary"
                onClick={() => onAccept(order.orderId, request.userId)}
              >
                수락하기
              </ActionButton>
            </div>
          </div>
        );
      }
      if (request.status === "ACCEPT") {
        return (
          <div key={i} className="rr-card-footer">
            <div className="footer-left-button">
              <ActionButton
                color="black"
                onClick={() => onDelete(order.orderId, request.userId)}
              >
                삭제
              </ActionButton>
            </div>
            <div className="footer-right">
              <ActionButton
                color="default"
                onClick={() => onChat(order.orderId, request.userId)}
              >
                <MessageOutlined /> 채팅
              </ActionButton>
              <ActionButton
                color="primary"
                onClick={() => onComplete(order.orderId, request.userId)}
              >
                <CheckCircleOutlined /> 완료확인
              </ActionButton>
            </div>
          </div>
        );
      }
    });

    // 남의 제안에 내가 심부름을 요청한 경우
  } else {
    return (
      <div className="rr-card-footer">
        <div className="footer-text"></div>
        <div className="footer-button">
          <ActionButton color="pending" disabled>
            {order.myRequestStatus === "WAITING" ? "수락대기중" : "수락완료"}
          </ActionButton>
        </div>
      </div>
    );
  }
};

const MyProposalCardList = (props) => {
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
      const result = await proposalModel.getUserProposalList(
        user.userId,
        pagination
      );
      setPagination({
        ...pagination,
        offset: pagination.offset + pagination.limit,
      });
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  // 심부름 요청 삭제
  const handleDeleteRequest = (requestId, requestUserId) => {
    console.log("delete!", requestId, requestUserId);
  };

  // 심부름 요청 수락
  const handleAcceptRequest = (requestId, requestUserId) => {
    console.log("accept!", requestId, requestUserId);
  };

  // 심부름 요청한 사람과 채팅
  const handleChat = (requestId, requestUserId) => {
    console.log("chat!", requestId, requestUserId);
  };

  // 심부름 완료
  const handleComplete = (requestId, requestUserId) => {
    console.log("complete!", requestId, requestUserId);
  };

  useEffect(() => {
    fetch();
  }, []);

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
                name: item.runnerName,
                title: item.message,
                content: item.introduce,
                date: item.createdAt,
              }}
              url={`/my/proposal/detail/${item.orderId}`}
              footer={
                <CardFooter
                  myUserId={user.userId}
                  order={item}
                  // requests={item.requests}
                  requests={[
                    { userName: "이러너", userId: 1, status: "WAITING" },
                    { userName: "김러너", userId: 2, status: "ACCEPT" },
                  ]}
                  onDelete={handleDeleteRequest}
                  onAccept={handleAcceptRequest}
                  onChat={handleChat}
                  onComplete={handleComplete}
                />
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

export default MyProposalCardList;
