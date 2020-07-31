import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CommonLayout from "@templates/Layouts/CommonLayout";
import UserInfo from "@organisms/Info/UserInfo";
import ProposalInfo from "@organisms/Info/ProposalInfo";
import Contents from "@templates/Detail/Contents";

import proposalModel from "@data/proposalModel";

const MyProposalDetail = ({ t, match }) => {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState({
    order: {},
    requests: [],
  });

  const fetch = async () => {
    try {
      const orderInfo = await proposalModel.getProposalDetail(
        match.params.proposal_id
      );
      setData(orderInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [match.params.proposal_id]);

  return (
    <CommonLayout
      pageName={t("lbl_order_detail")}
      showMenuButton={false}
      showBottom={false}
      backgroundColor="#ffffff"
    >
      <div
        id="rr-proposal-detail-page"
        className="global-content-container p-t-20"
      >
        <p className="detail-title">
          {data.order.runnerId === user.userId ? "나의 제안" : "쇼퍼의 제안"}
        </p>
        <UserInfo type="proposal" userInfo={user} order={data.order} />
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
