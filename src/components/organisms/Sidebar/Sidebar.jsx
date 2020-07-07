import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer, Checkbox } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { toggleFilter, changeFilter } from "@modules/filter/filterActions";

const statusOptions = [
  { label: "매칭전", value: "MATCHING" },
  { label: "여유", value: "MATCHED" },
];

const priorityOptions = [
  { label: "여유", value: "FREE" },
  { label: "보통", value: "NORMAL" },
  { label: "긴급", value: "URGENT" },
];

const genderOptions = [
  { label: "여자", value: "F" },
  { label: "남자", value: "M" },
  { label: "기타", value: "O" },
];

const Sidebar = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <Drawer
      // title="Basic Drawer"
      placement="right"
      closable={false}
      onClose={() => dispatch(toggleFilter())}
      visible={filter.visible}
      bodyStyle={{ padding: "0px" }}
    >
      <div className="rr-sidebar">
        <div className="title">
          <span>필터</span>
          <span className="text-right">
            <MenuOutlined
              className="icon-menu"
              onClick={() => dispatch(toggleFilter())}
            />
          </span>
        </div>
        <div className="filter-items">
          <div className="filter-item-title">매칭 상태</div>
          <div className="filter-item">
            <Checkbox.Group
              options={statusOptions}
              value={filter.status}
              onChange={(value) =>
                dispatch(changeFilter({ key: "status", value }))
              }
            />
          </div>
          <div className="filter-item-title">중요도</div>
          <div className="filter-item">
            <Checkbox.Group
              options={priorityOptions}
              value={filter.priority}
              onChange={(value) =>
                dispatch(changeFilter({ key: "priority", value }))
              }
            />
          </div>
          <div className="filter-item-title">성별</div>
          <div className="filter-item">
            <Checkbox.Group
              options={genderOptions}
              value={filter.gender}
              onChange={(value) =>
                dispatch(changeFilter({ key: "gender", value }))
              }
            />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
