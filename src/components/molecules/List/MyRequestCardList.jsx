/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";

import requestModel from "@data/requestModel";

import ActionButton from "@atoms/Buttons/ActionButton";

const CardFooter = ({ myUserId, order, requests, onDelete, onAccept }) => {
  // 나의 요청일 경우
  if (order.shopperId === myUserId) {
    return requests.map((request, i) => {
      if (request.status !== "WAITING") return null; // 이미 수락한경우 return null
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
    });

    // 남의 요청에 내가 심부름요청을 한 경우
  } else {
    return (
      <div className="rr-card-footer">
        <div className="footer-left"></div>
        <div className="footer-right">
          <ActionButton color="pending" disabled>
            {order.myRequestStatus === "WAITING" ? "수락대기중" : "수락완료"}
          </ActionButton>
        </div>
      </div>
    );
  }
};

const MyRequestCardList = (props) => {
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
      const result = await requestModel.getUserRequestList(
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

  // 심부름 신청 삭제
  const handleDeleteRequest = (requestId, requestUserId) => {
    console.log("delete!", requestId, requestUserId);
  };

  // 심부름 신청 수락
  const handleAcceptRequest = (requestId, requestUserId) => {
    console.log("accept!", requestId, requestUserId);
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
              url={`/my/request/detail/${item.orderId}`}
              footer={
                <CardFooter
                  myUserId={user.userId}
                  order={item}
                  // requests={item.requests}
                  requests={[
                    { userName: "이러너", userId: 1, status: "WAITING" },
                  ]}
                  onDelete={handleDeleteRequest}
                  onAccept={handleAcceptRequest}
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

export default MyRequestCardList;
