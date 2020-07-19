import React from "react";
import styled from "@emotion/styled";
import img from "../public/img/btn-close.png";

export default function BtnClose() {
  const BtnClose = styled.button`
    margin: 0;
    background: url(${img}) no-repeat 100% 100%;
    border: none;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    width: 43px;
    height: 43px;
    cursor: pointer;
  `;
  return <BtnClose />;
}
