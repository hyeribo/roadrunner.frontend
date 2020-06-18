import React, { useState, useEffect } from "react";
import moment from "moment";

import CommonLayout from "@templates/Layouts/CommonLayout";
import CollapseItem from "@molecules/ListItems/CollapseItem";

import boardModel from "@data/boardModel";

const Notice = ({ t }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getNotices();
  }, []);

  const getNotices = async () => {
    try {
      const result = await boardModel.getBoardItems("notice");
      setNotices(result.data.data.boards);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommonLayout
      pageName={t("lbl_notice")}
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div className="global-content-container">
        {notices.map((notice) => (
          <CollapseItem
            key={notice.boardId}
            title={notice.title}
            subtitle={`등록일 ${moment(notice.createdAt).format("YYYY.MM.DD")}`}
            content={notice.contents}
          />
        ))}
      </div>
    </CommonLayout>
  );
};

export default Notice;
