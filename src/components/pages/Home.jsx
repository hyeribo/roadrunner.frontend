import React, { useState, useEffect } from "react";

import MainLayout from "@templates/Layouts/MainLayout";
import RoleSwitch from "@molecules/Switch/RoleSwitch";
import RequestCardList from "@molecules/CardList/RequestCardList";
import ProposalCardList from "@molecules/CardList/ProposalCardList";

const initialRole = "runner";
const Home = (props) => {
  const [role, setRole] = useState(initialRole);
  const [data, setData] = useState([]);

  const fetch = async () => {
    const newData = [];
    try {
      if (role === "runner") {
        for (let i = 0; i < 10; i++) {
          newData.push({
            id: i,
            grade: "보통",
            address: "기숙사 A동 1층 102호",
            wname: "정다운",
            title: "마스크 사주세요.",
            content: "오늘안에 가져다주세요.",
            status: "매칭전",
            wdate: "2020-04-17 12:30",
            hits: i * 10,
          });
        }
      } else {
        for (let i = 0; i < 10; i++) {
          newData.push({
            id: i,
            grade: "우수",
            address: "러너구 러너동 1004번지",
            wname: "김러너",
            title: "필요한게 있으면 알려주세요.",
            content: "ABC마트 2시에 방문 예정",
            wdate: "2020-04-20 12:30",
            hits: i * 10,
          });
        }
      }
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [role]);

  return (
    <MainLayout tabName="home" containPaddingTop={false}>
      <RoleSwitch onChange={(newRole) => setRole(newRole)} />
      <div className="p-l-15 p-r-15" style={{ marginTop: "-40px" }}>
        {role === "runner" ? (
          <RequestCardList requests={data} />
        ) : (
          <ProposalCardList proposals={data} />
        )}
      </div>
    </MainLayout>
  );
};

export default Home;
