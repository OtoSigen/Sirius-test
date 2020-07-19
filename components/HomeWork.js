import React from "react";
import styled from "@emotion/styled";
import imgTask from "../public/img/Vector.png";
import BtnCanselLesson from "./BtnCanselLesson";

export default function HomeWork() {
  const HomeWork = styled.div`
    width: 290px;
    height: 102px;
    display: flex;
    flex-flow: column nowrap;
  `;

  const HomeWorkTitle = styled.h2`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 11px;
    line-height: 15px;
    text-transform: uppercase;
    color: #2a2a3b;
    margin: 0 0 15px 17px;
  `;

  const Task = styled.h2`
    display: flex;
    align-items: center;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #2a2a3b;
    margin: 0 10px 15px 0;
    :before{
    content: url("${imgTask}");
    width: 15px;
    height: 11px;
    margin: -10px 10px 0 0;
    }
  `;

  const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
  `;

  return (
    <HomeWork>
      <HomeWorkTitle>Домашнее задание:</HomeWorkTitle>
      <Task>Решить примеры 22-27 в рабочей тетради</Task>
      <Task>Счет на время на онлайн-тренажере</Task>
      <BtnWrap>
        <BtnCanselLesson />
      </BtnWrap>
    </HomeWork>
  );
}
