import React from "react";
import styled from "@emotion/styled";

export default function Badge() {
  const Badge = styled.div`
    background: #1ac9b7;
    border-radius: 50px;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    width: 79px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return <Badge>Оплачено</Badge>;
}
