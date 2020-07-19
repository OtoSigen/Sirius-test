import React from "react";
import styled from "@emotion/styled";
import img from "../public/img/btn-box.png";

export default function BtnBoxNext() {
  const BtnBoxNext = styled.button`
    margin: 0;
    background: url(${img}) no-repeat 100% 100%;
    border: none;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
  `;
  return <BtnBoxNext />;
}
