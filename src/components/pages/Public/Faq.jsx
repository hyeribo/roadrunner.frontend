import React from "react";

import CommonLayout from "@templates/Layouts/CommonLayout";
import CollapseItem from "@molecules/ListItems/CollapseItem";

const Faq = () => {
  return (
    <CommonLayout
      pageName="이용 안내"
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div className="global-content-container">
        <CollapseItem
          title="로드 러너 이용 안내"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <CollapseItem
          title="로드 러너 이용시 주의사항"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <CollapseItem
          title="러너란?"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <CollapseItem
          title="쇼퍼란?"
          subtitle="등록일 2020.05.01"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
      </div>
    </CommonLayout>
  );
};

export default Faq;
