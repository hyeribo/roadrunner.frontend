import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import Empty from "@atoms/Empty/Empty";
import defaultProfileImg from "@assets/images/bedge-card-urgent.png";

const ChattingItem = ({ chatting }) => {
  const profileImg = chatting.profileImagePath
    ? `${process.env.REACT_APP_IMG_BASE_URL}${userInfo.profileImagePath}`
    : defaultProfileImg;

  return (
    <Link to={`/chattings/room/${chatting.chattingId}`}>
      <div className="chatting-room-item">
        <div className="profile-img">
          <img src={profileImg} />
        </div>
        <div className="user-info">
          <div className="username">{chatting.username}</div>
          <div className="preview limit-line-2">{chatting.preview}</div>
        </div>
        <div className="chat-info">
          <div className="date">{chatting.lastTime}</div>
          <div className="badge">{chatting.count}</div>
        </div>
      </div>
    </Link>
  );
};

const ChattingEditItem = ({ chatting, onToggleSelect, selected }) => {
  const profileImg = chatting.profileImagePath
    ? `${process.env.REACT_APP_IMG_BASE_URL}${userInfo.profileImagePath}`
    : defaultProfileImg;

  return (
    <div
      className="chatting-room-item"
      onClick={() => onToggleSelect(chatting.chattingId)}
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
        <div className="username">{chatting.username}</div>
        <div className="preview limit-line-2">{chatting.preview}</div>
      </div>
      <div className="chat-info">
        <div className="date">{chatting.lastTime}</div>
        <div className="badge">{chatting.count}</div>
      </div>
    </div>
  );
};

const ChattingEditManage = ({ chattings, selectedIds, onToggleSelectAll }) => {
  if (!chattings.length) return <Empty text="대화 목록이 없습니다." />;

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
      <div className="count">{selectedIds.length}개 선택됨</div>
    </div>
  );
};

const ChattingList = ({ chattings, isEditMode, onChange }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleToggleSelect = (chattingId) => {
    const selectedIndex = selectedIds.indexOf(chattingId);
    if (selectedIndex >= 0) {
      const newSelectedIds = selectedIds.filter((id) => id !== chattingId);
      setSelectedIds(newSelectedIds);
    } else {
      setSelectedIds(selectedIds.concat([chattingId]));
    }
  };

  const handleToggleSelectAll = (checked) => {
    if (checked) {
      const newSelectedIds = chattings.map((chatting) => chatting.chattingId);
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
        if (isEditMode) {
          return (
            <ChattingEditItem
              key={chatting.chattingId}
              chatting={chatting}
              onToggleSelect={handleToggleSelect}
              selected={selectedIds.includes(chatting.chattingId)}
            />
          );
        } else {
          return <ChattingItem key={chatting.chattingId} chatting={chatting} />;
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
