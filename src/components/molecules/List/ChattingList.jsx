import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import moment from "moment";
import { useTranslation } from "react-i18next";

import Empty from "@atoms/Empty/Empty";
import defaultProfileImg from "@assets/images/bedge-card-urgent.png";

const ChattingItem = ({ chatting, myUserId }) => {
  let other = {};
  if (chatting.users && chatting.users.length > 0) {
    other = chatting.users.filter((user) => user.userId !== myUserId)[0];
  }
  const profileImg = other.profileImagePath
    ? `${process.env.REACT_APP_IMG_BASE_URL}${other.profileImagePath}`
    : defaultProfileImg;

  console.log("other", other);

  return (
    <Link to={`/chattings/room/${chatting.roomKey}`}>
      <div className="chatting-room-item">
        <div className="profile-img">
          <img src={profileImg} />
        </div>
        <div className="user-info">
          <div className="username">{other.displayName}</div>
          <div className="preview limit-line-2">{chatting.type}</div>
        </div>
        <div className="chat-info">
          <div className="date">
            {moment(chatting.updatedAt).format("HH:mm")}
          </div>
          {/* <div className="badge">{chatting.count}</div> */}
        </div>
      </div>
    </Link>
  );
};

const ChattingEditItem = ({ chatting, onToggleSelect, selected, myUserId }) => {
  let other = {};
  if (chatting.users && chatting.users.length > 0) {
    other = chatting.users.filter((user) => user.userId !== myUserId)[0];
  }
  const profileImg = other.profileImagePath
    ? `${process.env.REACT_APP_IMG_BASE_URL}${other.profileImagePath}`
    : defaultProfileImg;

  return (
    <div
      className="chatting-room-item"
      onClick={() => onToggleSelect(chatting.roomId)}
    >
      <div className="profile-img">
        <img src={profileImg} />
        {selected && (
          <div className="img-mask">
            <CheckOutlined />
          </div>
        )}
      </div>
      <div className="user-info">
        <div className="username">{other.displayName}</div>
        <div className="preview limit-line-2">{chatting.type}</div>
      </div>
      <div className="chat-info">
        <div className="date">{moment(chatting.updatedAt).format("HH:mm")}</div>
        {/* <div className="badge">{chatting.count}</div> */}
      </div>
    </div>
  );
};

const ChattingEditManage = ({ chattings, selectedIds, onToggleSelectAll }) => {
  if (!chattings.length) return <Empty text="대화 목록이 없습니다." />;
  const { t } = useTranslation();

  const selectedAll = chattings.length === selectedIds.length;
  return (
    <div className="chatting-edit">
      <div className="checkbox">
        <Checkbox
          checked={selectedAll}
          onChange={(e) => onToggleSelectAll(e.target.checked)}
        ></Checkbox>
        <span>전체</span>
      </div>
      <div className="count">
        {t("lbl_selected_count", { count: selectedIds.length })}
      </div>
    </div>
  );
};

const ChattingList = ({ chattings, isEditMode, onChange }) => {
  if (!chattings.length) return <Empty text="대화 목록이 없습니다." />;

  const user = useSelector((state) => state.user);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleToggleSelect = (roomId) => {
    const selectedIndex = selectedIds.indexOf(roomId);
    if (selectedIndex >= 0) {
      const newSelectedIds = selectedIds.filter((id) => id !== roomId);
      setSelectedIds(newSelectedIds);
    } else {
      setSelectedIds(selectedIds.concat([roomId]));
    }
  };

  const handleToggleSelectAll = (checked) => {
    if (checked) {
      const newSelectedIds = chattings.map((chatting) => chatting.roomId);
      setSelectedIds(newSelectedIds);
    } else {
      setSelectedIds([]);
    }
  };

  useEffect(() => {
    onChange(selectedIds);
  }, [selectedIds]);

  useEffect(() => {
    setSelectedIds([]);
  }, [isEditMode]);

  return (
    <div className="rr-chatting-list">
      {isEditMode && (
        <ChattingEditManage
          chattings={chattings}
          selectedIds={selectedIds}
          onToggleSelectAll={handleToggleSelectAll}
        />
      )}
      {chattings.map((chatting) => {
        console.log("chatting", chatting);
        if (isEditMode) {
          return (
            <ChattingEditItem
              key={chatting.roomId}
              chatting={chatting}
              onToggleSelect={handleToggleSelect}
              selected={selectedIds.includes(chatting.roomId)}
              myUserId={user.userId}
            />
          );
        } else {
          return (
            <ChattingItem
              key={chatting.roomId}
              chatting={chatting}
              myUserId={user.userId}
            />
          );
        }
      })}
    </div>
  );
};

ChattingList.propTypes = {
  chattings: PropTypes.array,
  isEditMode: PropTypes.bool,
  onChange: PropTypes.func,
};
ChattingList.defaultProps = {
  chattings: [],
  isEditMode: false,
  onChange: () => {},
};
export default ChattingList;
