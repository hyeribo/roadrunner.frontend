import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";

import Sidebar from "@organisms/Sidebar/Sidebar";

import { toggleFilter } from "@modules/filter/filterActions";

const NormalHeader = ({ onClickMenu }) => (
  <div className="content">
    <p className="title">Road Runner</p>
    <MenuOutlined className="menu-icon" onClick={() => onClickMenu()} />
  </div>
);

const EditableHeader = ({ isEditMode, setIsEditMode, onEditComplete }) => {
  if (!isEditMode) {
    return (
      <div className="content">
        <p className="title">Road Runner</p>
        <span className="menu-text" onClick={() => setIsEditMode(true)}>
          편집
        </span>
      </div>
    );
  } else {
    return (
      <div className="content">
        <span className="menu-text">
          <ArrowLeftOutlined onClick={() => setIsEditMode(false)} />
        </span>
        <p className="title-text">편집</p>
        <span className="menu-text blue" onClick={() => onEditComplete()}>
          삭제
        </span>
      </div>
    );
  }
};

const MainHeader = ({ editable, onEditComplete, onChangeMode }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    onChangeMode(isEditMode);
  }, [isEditMode]);

  return (
    <div className="rr-main-header">
      <div className="global-content-wrapper">
        {editable ? (
          <EditableHeader
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            onEditComplete={onEditComplete}
          />
        ) : (
          <NormalHeader onClickMenu={() => dispatch(toggleFilter())} />
        )}
      </div>
      <Sidebar />
    </div>
  );
};

export default MainHeader;
