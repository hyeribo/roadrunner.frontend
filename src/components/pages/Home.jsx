import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MainLayout from "@templates/Layouts/MainLayout";
import RoleSwitch from "@molecules/Switch/RoleSwitch";
import RequestCardList from "@molecules/List/RequestCardList";
import ProposalCardList from "@molecules/List/ProposalCardList";

import { setUser } from "@modules/user/userActions";

const Home = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <MainLayout tabName="home" containPaddingTop={false} showMenuButton={false}>
      <RoleSwitch
        defaultValue={user.mode}
        onChange={(newRole) => dispatch(setUser({ mode: newRole }))}
      />
      <div className="p-l-15 p-r-15" style={{ marginTop: "-40px" }}>
        {user.mode === "runner" ? <RequestCardList /> : <ProposalCardList />}
      </div>
    </MainLayout>
  );
};

export default Home;
