import React, { useState, useEffect } from "react";

import MainLayout from "@templates/Layouts/MainLayout";
import SampleCard from "@atoms/Cards/SampleCard";

const Sample = () => {
  return (
    <MainLayout>
      <SampleCard contents="Hi!!!" />
    </MainLayout>
  );
};

export default Sample;
