import React from "react";
import styled from "@emotion/styled";
import imgArrow from "../public/img/arrow_icon.png";

export default function BtnArrow() {
  const BtnArrow = styled.button`
    margin: 0;
    background: url(${imgArrow}) no-repeat 100% 100%;
    border: none;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    width: 10px;
    height: 6px;
    cursor: pointer;
  `;
  return <BtnArrow />;
}
