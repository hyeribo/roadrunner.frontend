import React, { useState, useEffect } from "react";
import moment from "moment";

import CommonLayout from "@templates/Layouts/CommonLayout";
import CollapseItem from "@molecules/ListItems/CollapseItem";

import boardModel from "@data/boardModel";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getFaqs();
  }, []);

  const getFaqs = async () => {
    try {
      const result = await boardModel.getBoardItems("information");
      setFaqs(result.data.data.boards);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommonLayout
      pageName="이용 안내"
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div className="global-content-container">
        {faqs.map((faq) => (
          <CollapseItem
            key={faq.boardId}
            title={faq.title}
            subtitle={`등록일 ${moment(faq.createdAt).format("YYYY.MM.DD")}`}
            content={faq.contents}
          />
        ))}
      </div>
    </CommonLayout>
  );
};

export default Faq;
