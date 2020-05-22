import React, { useState, useEffect } from "react";

import MainLayout from "@templates/Layout/MainLayout";
import SampleCard from "@atoms/Cards/SampleCard";

const Sample = () => {
  return (
    <MainLayout>
      <SampleCard>
        <div>안녕하세요.</div>
      </SampleCard>
    </MainLayout>
  );
};

export default Sample;
