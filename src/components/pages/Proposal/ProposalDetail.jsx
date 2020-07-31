import React, { useState, useEffect } from "react";
import { Modal, message } from "antd";
import { useSelector } from "react-redux";

import CommonLayout from "@templates/Layouts/CommonLayout";
import UserInfo from "@organisms/Info/UserInfo";
import ProposalInfo from "@organisms/Info/ProposalInfo";
import Contents from "@templates/Detail/Contents";

import proposalModel from "@data/proposalModel";
import userModel from "@data/userModel";

const { confirm } = Modal;

const ProposalDetail = ({ t, match }) => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [runner, setRunner] = useState({});
  const [data, setData] = useState({
    order: {},
    requests: [],
  });
  const [showBottom, setShowBottom] = useState(true);

  const fetch = async () => {
    try {
      const orderInfo = await proposalModel.getProposalDetail(
        match.params.proposal_id
      );
      const runnerInfo = await userModel.getUserInfo(orderInfo.order.runnerId);
      if (orderInfo.requests.length) {
        const myRequest = orderInfo.requests.filter(
          (req) => req.shopperId === user.userId
        );
        if (myRequest.length > 0) setShowBottom(false);
      }

      setData(orderInfo);
      setRunner(runnerInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const requestOrder = async () => {
    try {
      setLoading(true);
      await proposalModel.acceptProposal(match.params.proposal_id);
      message.success("요청되었습니다.");
      fetch();
    } catch (error) {
      message.error("요청에 실패했습니다.");
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [match.params.proposal_id]);

  return (
    <CommonLayout
      pageName={t("lbl_order_detail")}
      showMenuButton={false}
      showBottom={showBottom}
      buttonProps={{
        text: t("lbl_request"),
        onClick: () =>
          confirm({
            title: "심부름을 요청하시겠습니까?",
            onOk: requestOrder,
          }),
        color: loading ? "disabled" : "primary",
        disabled: loading,
      }}
      backgroundColor="#ffffff"
    >
      <div
        id="rr-proposal-detail-page"
        className="global-content-container p-t-20"
      >
        <UserInfo type="proposal" userInfo={runner} order={data.order} />
        <Contents
          items={[
            {
              label: "현재 메세지",
              content: data.order.message,
            },
            {
              label: "예상 일정",
              content: data.order.estimatedTime,
            },
            {
              label: "힌즐 소개",
              content: data.order.introduce,
            },
            {
              label: "기본정보",
              content: (
                <ProposalInfo userInfo={data.runner} order={data.order} />
              ),
            },
          ]}
        />
      </div>
    </CommonLayout>
  );
};

ProposalDetail.propTypes = {};

export default ProposalDetail;
