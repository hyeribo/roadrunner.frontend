import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainLayout from "@templates/Layouts/MainLayout";
import RoleSwitchSimple from "@molecules/Switch/RoleSwitchSimple";
import RequestCardList from "@molecules/CardList/RequestCardList";
import ProposalCardList from "@molecules/CardList/ProposalCardList";

import { setUser } from "@modules/user/userActions";

const MyRequests = () => {
  const [data, setData] = useState([]);
  const mode = useSelector((state) => state.user.mode);
  const dispatch = useDispatch();

  return (
    <MainLayout tabName="myrequest">
      <RoleSwitchSimple
        defaultValue={mode}
        onChange={(newRole) => dispatch(setUser({ mode: newRole }))}
      />
      <div className="p-l-15 p-r-15">
        {mode === "runner" ? <RequestCardList my /> : <ProposalCardList my />}
      </div>
    </MainLayout>
  );
};

export default MyRequests;
