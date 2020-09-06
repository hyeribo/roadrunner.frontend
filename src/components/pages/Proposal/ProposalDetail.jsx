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
      message.success(t("msg_req_write_s"));
      fetch();
    } catch (error) {
      message.error(t("msg_req_write_f"));
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
            title: t("cfm_request_delivery"),
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
              label: t("lbl_now_message"),
              content: data.order.message,
            },
            {
              label: t("lbl_expect_schedule"),
              content: data.order.estimatedTime,
            },
            {
              label: t("lbl_introduce"),
              content: data.order.introduce,
            },
            {
              label: t("lbl_basic_info"),
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
