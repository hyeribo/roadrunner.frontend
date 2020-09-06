import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainLayout from "@templates/Layouts/MainLayout";
import RoleSwitchSimple from "@molecules/Switch/RoleSwitchSimple";
import MyRequestCardList from "@molecules/List/MyRequestCardList";
import MyProposalCardList from "@molecules/List/MyProposalCardList";

import { setUser } from "@modules/user/userActions";

const MyRequests = ({ history }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChatting = (userId, myId) => {
    const roomKey = [userId, myId].sort((a, b) => a - b).join("-");
    history.push(`/chattings/room/${roomKey}`);
  };

  return (
    <MainLayout tabName="myrequest" showMenuButton={false}>
      <RoleSwitchSimple
        defaultValue={user.mode}
        onChange={(newRole) => dispatch(setUser({ mode: newRole }))}
      />
      <div className="p-l-15 p-r-15">
        {user.mode === "runner" ? (
          <MyProposalCardList onChatting={handleChatting} />
        ) : (
          <MyRequestCardList onChatting={handleChatting} />
        )}
      </div>
    </MainLayout>
  );
};

export default MyRequests;
