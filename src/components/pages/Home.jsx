import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MainLayout from "@templates/Layouts/MainLayout";
import RoleSwitch from "@molecules/Switch/RoleSwitch";
import RequestCardList from "@molecules/CardList/RequestCardList";
import ProposalCardList from "@molecules/CardList/ProposalCardList";

import { setUser } from "@modules/user/userActions";

const Home = (props) => {
  const mode = useSelector((state) => state.user.mode);
  const dispatch = useDispatch();

  return (
    <MainLayout tabName="home" containPaddingTop={false}>
      <RoleSwitch
        defaultValue={mode}
        onChange={(newRole) => dispatch(setUser({ mode: newRole }))}
      />
      <div className="p-l-15 p-r-15" style={{ marginTop: "-40px" }}>
        {mode === "runner" ? (
          <RequestCardList my={false} />
        ) : (
          <ProposalCardList my={false} />
        )}
      </div>
    </MainLayout>
  );
};

export default Home;
