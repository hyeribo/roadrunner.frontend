import React from "react";

import RunnerRequestLayout from "@templates/Layouts/RunnerRequestLayout";

const Write = () => {
  return (
    <RunnerRequestLayout bottomButtons={[{ text: "test" }]}>
      <div>Write</div>
    </RunnerRequestLayout>
  );
};

export default Write;

/*
import React from "react";

import RunnerRequestLayout from "@templates/Layouts/RunnerRequestLayout";

import CommonLayout from "@templates/Layouts/CommonLayout";

const Write = () => {
  return (
    <CommonLayout bottomButtons={[{ text: "test" }]}>
      <div>Write</div>
    </CommonLayout>
  );
};

export default Write;
*/
