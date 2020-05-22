import React, { useState } from "react";

import MainLayout from "@templates/Layouts/MainLayout";
import SampleCard from "@atoms/Cards/SampleCard";

// const data =[
//   {
//     id: i,
//     grade: "보통",
//     address: "기숙사 A동 1층 102호",
//     wname: "정다운",
//     title: "마스크 사주세요.",
//     content: "오늘안에 가져다주세요.",
//     status: "매칭전",
//     wdate: "2020-04-17 12:30",
//     hits: i * 10,
//   },
//   {
//     id: i,
//     grade: "보통",
//     address: "기숙사 A동 1층 102호",
//     wname: "정다운",
//     title: "마스크 사주세요.",
//     content: "오늘안에 가져다주세요.",
//     status: "매칭전",
//     wdate: "2020-04-17 12:30",
//     hits: i * 10,
//   },{
//     id: i,
//     grade: "보통",
//     address: "기숙사 A동 1층 102호",
//     wname: "정다운",
//     title: "마스크 사주세요.",
//     content: "오늘안에 가져다주세요.",
//     status: "매칭전",
//     wdate: "2020-04-17 12:30",
//     hits: i * 10,
//   }
// ]
const Sample = () => {

  return (
    <MainLayout>
      <SampleCard
        data={{
          id: 1,
          grade: "보통",
          address: "기숙사 A동 1층 102호",
          wname: "정다운",
          title: "마스크 사주세요.",
          contents: "오늘안에 가져다주세요.",
          status: "매칭전",
          wdate: "2020-04-17 12:30",
          hits: 10,
        }}
        footer={(
          <button>수락하기</button>
        )}
      >
        <div>
          안녕하세요.
        </div>
      </SampleCard>
    </MainLayout>
  )
};

export default Sample;
