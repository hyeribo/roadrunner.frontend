import React, { useState, useEffect } from "react";
import { Modal, message } from "antd";

import CommonLayout from "@templates/Layouts/CommonLayout";
import UserInfo from "@organisms/Info/UserInfo";
import ProposalInfo from "@organisms/Info/ProposalInfo";
import Contents from "@templates/Detail/Contents";

import proposalModel from "@data/proposalModel";

const { confirm } = Modal;

const MyProposalDetail = ({ t, match }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    runner: {},
    order: {},
  });

  const fetch = async () => {
    try {
      const result = await proposalModel.getMyProposalDetail(
        match.params.proposal_id
      );
      setData({
        ...data,
        order: result,
      });
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
      showBottom
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
        <UserInfo type="proposal" userInfo={data.runner} order={data.order} />
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

MyProposalDetail.propTypes = {};

export default MyProposalDetail;
