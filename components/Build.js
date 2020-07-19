import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Time from "./Time";
import LessonsLeft from "./LessonsLeft";
import BtnAddLesson from "./BtnAddLesson";
import MyAwards from "./MyAwards";
import Abakus from "./Abakus";
import Stocks from "./Stock";
import User from "./User";

export default function Build() {
  const WrapAll = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 320px;
  `;
  const WrapBtn = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 320px;
    margin-bottom: 30px;
  `;

  return (
    <>
      <Header />
      <WrapAll>
        <User />
        <Time />
        <WrapBtn>
          <LessonsLeft />
          <BtnAddLesson />
        </WrapBtn>
        <MyAwards />
        <Abakus />
        <Stocks />
      </WrapAll>
    </>
  );
}
