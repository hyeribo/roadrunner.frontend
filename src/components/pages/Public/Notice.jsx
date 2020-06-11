import React, { useState, useEffect } from "react";

import CommonLayout from "@templates/Layouts/CommonLayout";
import CollapseItem from "@molecules/ListItems/CollapseItem";

import boardModel from "@data/boardModel";

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getNotices();
  }, []);

  const getNotices = async () => {
    try {
      const result = await boardModel.getBoardItems("notice");
      setNotices(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommonLayout
      pageName="공지 사항"
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div className="global-content-container">
        <CollapseItem
          title="로드 러너 서비스 런칭 안내"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <CollapseItem
          title="러너 심부름 등록시 공지사항"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <CollapseItem
          title="쇼퍼 심부름 등록시 공지사항"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <CollapseItem
          title="채팅시 공지사항"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <CollapseItem
          title="심부름 공지사항"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <CollapseItem
          title="심부름 팁 지불 공지사항"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <CollapseItem
          title="리뷰 등록시 공지사항"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
      </div>
    </CommonLayout>
  );
};

export default Notice;
