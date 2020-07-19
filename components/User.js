import React from "react";
import styled from "@emotion/styled";

export default function User() {
  const User = styled.p`
    width: 268px;
    height: 60px;
  `;

  const Hello = styled.span`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: rgba(32, 32, 32, 0.75);
  `;

  const Name = styled.span`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: #2a2a3b;
    border-bottom: 2px solid #b81199;
  `;

  let user = "Владимир";
  return (
    <User>
      <Hello>Добро пожаловать,</Hello> <Name>{user}!</Name>
    </User>
  );
}
