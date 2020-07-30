/**
 * Home-Runner에 보여질 요청 카드 리스트
 */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Modal, message } from "antd";

import Card from "@atoms/Cards/Card";
import Empty from "@atoms/Empty/Empty";

import requestModel from "@data/requestModel";
import chattingModel from "@data/chattingModel";

import ActionButton from "@atoms/Buttons/ActionButton";

const { confirm } = Modal;

const CardFooter = ({
  t,
  myUserId,
  order,
  requests,
  onDelete,
  onAccept,
  onChatting,
  onComplete,
}) => {
  console.log("order", order);
  console.log("requests", requests);
  console.log("myUserId", myUserId);
  if (!requests || !requests.length) return null;
  // 나의 요청일 경우
  if (order.shopperId === myUserId) {
    return requests.map((request, i) => {
      return (
        <div key={i} className="rr-card-footer">
          <div className="footer-left">
            <span className="text-name">{request.runner.displayName}의 </span>
            <span className="text-blue">심부름 신청</span>
          </div>
          <div className="footer-right">
            {/* <ActionButton
              color="black"
              onClick={() => onDelete(order.orderId, request.userId)}
            >
              삭제
            </ActionButton> */}
            {request.requestStatus === "REQUESTING" && (
              <ActionButton
                color="primary"
                onClick={() => onAccept(request.requestId, request.runnerId)}
              >
                수락하기
              </ActionButton>
            )}
            {request.requestStatus === "MATCHED" && (
              <ActionButton
                color="default"
                onClick={() => onChatting(request.runnerId, myUserId)}
              >
                채팅
              </ActionButton>
            )}
            {request.requestStatus === "DELIVERED_REQUEST" && (
              <ActionButton
                color="primary"
                onClick={() => onComplete(order.orderId, request.runnerId)}
              >
                완료확인
              </ActionButton>
            )}
          </div>
        </div>
      );
    });

    // 남의 요청에 내가 심부름요청을 한 경우
  } else {
    const index = requests.findIndex((req) => req.runner.userId === myUserId);
    let requestStatus = "REQUESTING";
    if (index >= 0) {
      requestStatus = requests[index].requestStatus;
    }

    return (
      <div className="rr-card-footer">
        <div className="footer-left"></div>
        <div className="footer-right">
          <ActionButton color="pending" disabled>
            {t(`lbl_request_${requestStatus}`)}
            {/* {order.myRequestStatus === "WAITING" ? "수락대기중" : "수락완료"} */}
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
  });
  const [totalCount, setTotalCount] = useState(0);

  const fetch = async () => {
    try {
      const result = await requestModel.getMyRequestList(pagination);
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

  // 심부름 신청 삭제
  const handleDeleteRequest = (requestId, requestUserId) => {
    console.log("delete!", requestId, requestUserId);
  };

  // 심부름 신청 수락
  const handleAcceptRequest = (requestId, userId) => {
    confirm({
      title: "심부름 제안을 수락하시겠습니까?",
      onOk: async () => {
        try {
          await requestModel.changeRequestStatus(requestId, "MATCHED");
          await chattingModel.registChattingRoom(userId);
          message.success("수락되었습니다.");
          setData([]);
          fetch();
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  const handleComplete = (requestId) => {
    confirm({
      title: "완료확인 처리 하시겠습니까?",
      onOk: async () => {
        try {
          await requestModel.changeRequestStatus(requestId, "DELIVERED");
          message.success("완료확인 처리 되었습니다.");
          setData([]);
          fetch();
        } catch (error) {
          console.log(error);
        }
      },
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
                  t={t}
                  myUserId={user.userId}
                  order={item}
                  // requests={item.requests}
                  requests={item.shopperOrderRequests}
                  onDelete={handleDeleteRequest}
                  onAccept={handleAcceptRequest}
                  onChatting={props.onChatting}
                  onComplete={handleComplete}
                />
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

export default MyRequestCardList;
