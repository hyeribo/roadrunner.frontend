import React from "react";

import MainLayout from "@templates/Layouts/MainLayout";
import UserInfo from "@organisms/UserInfo/UserInfo";

const MyPage = () => {
  return (
    <MainLayout tabName="my" backgroundColor="#ffffff">
      <UserInfo type="shopper" />
    </MainLayout>
  );
};

export default MyPage;
