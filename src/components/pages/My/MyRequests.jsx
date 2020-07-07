import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainLayout from "@templates/Layouts/MainLayout";
import RoleSwitchSimple from "@molecules/Switch/RoleSwitchSimple";
import MyRequestCardList from "@molecules/CardList/MyRequestCardList";
import MyProposalCardList from "@molecules/CardList/MyProposalCardList";

import { setUser } from "@modules/user/userActions";

const MyRequests = () => {
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
          <MyProposalCardList />
        ) : (
          <MyRequestCardList />
        )}
      </div>
    </MainLayout>
  );
};

export default MyRequests;
