import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import Sidebar from "@organisms/Sidebar/Sidebar";

import { toggleFilter } from "@modules/filter/filterActions";

const NormalHeader = ({ showMenuButton, onClickMenu }) => (
  <div className="content">
    <p className="title">Road Runner</p>
    {showMenuButton && (
      <MenuOutlined className="menu-icon" onClick={() => onClickMenu()} />
    )}
  </div>
);

const EditableHeader = ({ isEditMode, setIsEditMode, onEditComplete }) => {
  const { t } = useTranslation();
  if (!isEditMode) {
    return (
      <div className="content">
        <p className="title">Road Runner</p>
        <span className="menu-text" onClick={() => setIsEditMode(true)}>
          {t("lbl_edit")}
        </span>
      </div>
    );
  } else {
    return (
      <div className="content">
        <span className="menu-text">
          <ArrowLeftOutlined onClick={() => setIsEditMode(false)} />
        </span>
        <p className="title-text">{t("lbl_edit")}</p>
        <span className="menu-text blue" onClick={() => onEditComplete()}>
          {t("lbl_remove")}
        </span>
      </div>
    );
  }
};

const MainHeader = ({
  showMenuButton,
  editable,
  onEditComplete,
  onChangeMode,
}) => {
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
          <NormalHeader
            showMenuButton={showMenuButton}
            onClickMenu={() => dispatch(toggleFilter())}
          />
        )}
      </div>
      <Sidebar />
    </div>
  );
};

export default MainHeader;
