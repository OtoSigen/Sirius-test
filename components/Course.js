import React from "react";
import styled from "@emotion/styled";
import imgCourseIcon from "../public/img/course-icon.png";
import BtnClose from "./BtnClose";
import BtnArrow from "./BtnArrow";

export default function Course() {
  const Course = styled.header`
    width: 320px;
    height: 128px;
    background: linear-gradient(112.33deg, #f64867 7.06%, #ba2d86 95.26%);
    box-shadow: 0 1px 4px rgba(90, 49, 100, 0.226972);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
  `;

  const CourseIcon = styled.div`
    background: url("${imgCourseIcon}");
    width: 28px;
    height: 34px;
  `;

  const Title = styled.h2`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    margin: 10px 0 4px 0;
  `;

  const DateTime = styled.p`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #fff;
    opacity: 0.7;
    margin: 0;
  `;

  const InfoWrap = styled.div`
    width: 160px;
    height: 67px;
  `;

  const MainContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: -40px;
  `;

  return (
    <Course>
      <BtnArrow />
      <MainContent>
        <CourseIcon />
        <InfoWrap>
          <Title>Курс Ментальная арифметика</Title>
          <DateTime>17 июня, 13:00-13:45</DateTime>
        </InfoWrap>
        <BtnClose />
      </MainContent>
    </Course>
  );
}
