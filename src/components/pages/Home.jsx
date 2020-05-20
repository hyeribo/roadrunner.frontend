import React from "react";

import MainLayout from "@templates/Layouts/MainLayout";
import RoleSwitch from "@molecules/RoleSwitch/RoleSwitch";
import RequestCardList from "@molecules/CardList/RequestCardList";

const Home = () => {
  return (
    <MainLayout tabName="home">
      <RoleSwitch style={{ marginBottom: "15px" }} />
      <RequestCardList />
    </MainLayout>
  );
};

export default Home;
