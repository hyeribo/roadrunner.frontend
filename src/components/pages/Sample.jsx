import React from "react";

import CommonLayout from "@templates/Layouts/CommonLayout";

const Sample = () => {
  return (
    <CommonLayout bottomButtons={[{ text: "test" }]}>
      <div>Sample</div>
    </CommonLayout>
  );
};

export default Sample;
