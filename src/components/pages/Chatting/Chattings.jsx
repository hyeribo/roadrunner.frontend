import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import MainLayout from "@templates/Layouts/MainLayout";
import ChattingList from "@molecules/List/ChattingList";

const Chattings = () => {
  const user = useSelector((state) => state.user);
  const [isEditMode, setIsEditMode] = useState(false);
  const [chattings, setChattings] = useState([
    {
      username: "신부름1",
      preview:
        "안녕하세요. 신부름입니다. 안녕하세요. 신부름입니다. 안녕하세요. 신부름입니다. 안녕하세요. 신부름입니다.",
      count: 3,
      lastTime: "오후 1:02",
      chattingId: 1,
    },
    {
      username: "신부름2",
      preview: "안녕하세요. 신부름입니다.",
      count: 3,
      lastTime: "오후 1:02",
      chattingId: 2,
    },
    {
      username: "신부름3",
      preview: "안녕하세요. 신부름입니다.",
      count: 3,
      lastTime: "오후 1:02",
      chattingId: 3,
    },
  ]);

  const handleDelete = () => {
    console.log("delete!");
  };

  return (
    <MainLayout
      tabName="chattings"
      id="rr-chattings"
      editable
      onEditComplete={handleDelete}
      onChangeMode={(editMode) => setIsEditMode(editMode)}
    >
      <ChattingList chattings={chattings} isEditMode={isEditMode} />
    </MainLayout>
  );
};

export default Chattings;
