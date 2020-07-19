import React from "react";
import styled from "@emotion/styled";
import imgCloseIcon from "../public/img/close_icon.png";

export default function BtnCancelLesson() {
  const BtnCancelLesson = styled.button`
    width: 140px;
    height: 36px;
    cursor: pointer;
    border: 1px solid rgba(42, 42, 59, 0.2);
    border-radius: 54px;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 11px;
    line-height: 15px;
    text-transform: uppercase;
    color: #2a2a3b;
    padding: 7px;
    background: #fff;
        :after{
    content: url("${imgCloseIcon}");
    padding-left: 5px;
    }
  `;
  return <BtnCancelLesson>Отменить урок</BtnCancelLesson>;
}
