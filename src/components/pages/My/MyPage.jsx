import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  SolutionOutlined,
  InfoCircleOutlined,
  BellOutlined,
  CommentOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import MainLayout from "@templates/Layouts/MainLayout";
import UserInfo from "@organisms/Info/UserInfo";

const ListItem = (props) => (
  <Link to={props.url}>
    <div className="list-item">
      <div className="icon">{props.icon}</div>
      <div className="text">{props.text}</div>
    </div>
  </Link>
);

const MyPage = ({ t }) => {
  const myInfo = useSelector((state) => state.user);

  return (
    <MainLayout tabName="my" backgroundColor="#ffffff">
      <div id="rr-my-page" className="p-20">
        <UserInfo type="proposal" userInfo={myInfo} />
        <div>
          <ListItem
            text={t("lbl_myrequest")}
            url="/my/requests"
            icon={<SolutionOutlined />}
          />
          <ListItem
            text={t("lbl_faq")}
            url="/faq"
            icon={<InfoCircleOutlined />}
          />
          <ListItem
            text={t("lbl_notice")}
            url="/notice"
            icon={<BellOutlined />}
          />
          <ListItem text={t("lbl_cs")} url="/cs" icon={<CommentOutlined />} />
          <ListItem
            text={t("lbl_settings")}
            url="/my/settings"
            icon={<SettingOutlined />}
          />
          {/* <ListItem
            text={t("lbl_intro_team")}
            url="/team"
            icon={<TeamOutlined />}
          /> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default MyPage;
