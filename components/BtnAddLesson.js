import React from "react";
import styled from "@emotion/styled";

export default function BtnAddLesson() {
  const BtnAddLesson = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    outline: none;
    width: 155px;
    height: 44px;
    cursor: pointer;
    background: linear-gradient(120.06deg, #f64867 7.06%, #ba2d86 95.26%);
    border-radius: 32px;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #fff;
    text-transform: uppercase;
  `;
  return <BtnAddLesson>Добавить уроки</BtnAddLesson>;
}
