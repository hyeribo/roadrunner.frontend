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
import UserInfo from "@organisms/UserInfo/UserInfo";

const ListItem = (props) => (
  <Link to={props.url}>
    <div className="list-item">
      <div className="icon">{props.icon}</div>
      <div className="text">{props.text}</div>
    </div>
  </Link>
);

const MyPage = () => {
  const myInfo = useSelector((state) => state.user);
  return (
    <MainLayout tabName="my" backgroundColor="#ffffff">
      <div id="rr-my-page" className="p-20">
        <UserInfo type="runner" userInfo={myInfo} />
        <div>
          <ListItem
            text="나의 요청 내역"
            url="/my/requests"
            icon={<SolutionOutlined />}
          />
          <ListItem text="이용 안내" url="/faq" icon={<InfoCircleOutlined />} />
          <ListItem text="공지 사항" url="/notice" icon={<BellOutlined />} />
          <ListItem text="고객센터" url="/cs" icon={<CommentOutlined />} />
          <ListItem text="설정" url="/my/settings" icon={<SettingOutlined />} />
          <ListItem text="팀 소개" url="/team" icon={<TeamOutlined />} />
        </div>
      </div>
    </MainLayout>
  );
};

export default MyPage;
