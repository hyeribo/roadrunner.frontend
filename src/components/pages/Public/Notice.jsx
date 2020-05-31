import React from "react";

import CommonLayout from "@templates/Layouts/CommonLayout";
import ListItem from "@molecules/ListItems/ListItem";

const Notice = () => {
  return (
    <CommonLayout
      pageName="공지 사항"
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div className="global-content-container">
        <ListItem
          title="로드 러너 서비스 런칭 안내"
          subtitle="등록일 2020.05.01"
          collapse="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <ListItem
          title="러너 심부름 등록시 공지사항"
          subtitle="등록일 2020.05.01"
          collapse="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <ListItem
          title="쇼퍼 심부름 등록시 공지사항"
          subtitle="등록일 2020.05.01"
          collapse="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <ListItem
          title="채팅시 공지사항"
          subtitle="등록일 2020.05.01"
          collapse="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <ListItem
          title="심부름 공지사항"
          subtitle="등록일 2020.05.01"
          collapse="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <ListItem
          title="심부름 팁 지불 공지사항"
          subtitle="등록일 2020.05.01"
          collapse="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <ListItem
          title="리뷰 등록시 공지사항"
          subtitle="등록일 2020.05.01"
          collapse="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
      </div>
    </CommonLayout>
  );
};

export default Notice;
