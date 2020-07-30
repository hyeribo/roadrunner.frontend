import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import MainLayout from "@templates/Layouts/MainLayout";
import ChattingList from "@molecules/List/ChattingList";

import chattingModel from "@data/chattingModel";

const Chattings = () => {
  const user = useSelector((state) => state.user);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState(false);
  const [chattings, setChattings] = useState([]);

  const fetch = async () => {
    try {
      const result = await chattingModel.getChattingList();
      setChattings(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    console.log("delete!", selectedIds);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <MainLayout
      tabName="chattings"
      id="rr-chattings"
      showMenuButton={false}
      editable={chattings.length > 0}
      onEditComplete={handleDelete}
      onChangeMode={(editMode) => setIsEditMode(editMode)}
    >
      <ChattingList
        chattings={chattings}
        isEditMode={isEditMode}
        onChange={setSelectedIds}
      />
    </MainLayout>
  );
};

export default Chattings;
