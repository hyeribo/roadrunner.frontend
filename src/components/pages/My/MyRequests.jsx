import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainLayout from "@templates/Layouts/MainLayout";
import RoleSwitchSimple from "@molecules/Switch/RoleSwitchSimple";
import RequestCardList from "@molecules/CardList/RequestCardList";
import ProposalCardList from "@molecules/CardList/ProposalCardList";

import { setUser } from "@modules/user/userActions";

const MyRequests = () => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <MainLayout tabName="myrequest">
      <RoleSwitchSimple
        defaultValue={user.mode}
        onChange={(newRole) => dispatch(setUser({ mode: newRole }))}
      />
      <div className="p-l-15 p-r-15">
        {user.mode === "runner" ? (
          <RequestCardList shopperId={user.userId} />
        ) : (
          <ProposalCardList runnerId={user.userId} />
        )}
      </div>
    </MainLayout>
  );
};

export default MyRequests;
