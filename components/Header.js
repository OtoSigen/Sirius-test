import React from "react";
import styled from "@emotion/styled";
import imgBurger from "../public/img/menuburger.png";
import imgLogo from "../public/img/logoheader.png";
import imgFrame from "../public/img/frame.png";

export default function Header() {
  const Header = styled.header`
    background: linear-gradient(0deg, #690297 0%, #bf1399 100%);
    width: 320px;
    height: 64px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  `;

  const Burger = styled.div`
    background: url("${imgBurger}") no-repeat;
    width: 28px;
    height: 16px;
    cursor: pointer;
  `;
  const Logo = styled.div`
    background: url("${imgLogo}") no-repeat;
    width: 53px;
    height: 34px;
`;
  const Frame = styled.div`
    background-image: url("${imgFrame}");
    width: 45px;
    height: 45px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`;

  return (
    <Header>
      <Burger />
      <Logo />
      <Frame />
    </Header>
  );
}
