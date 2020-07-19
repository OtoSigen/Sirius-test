import React from "react";
import styled from "@emotion/styled";
import imgCloseBurger from "../public/img/close-burger.png";
import imgStars from "../public/img/stars.png";
import imgFrame from "../public/img/frame.png";
import imgLogo from "../public/img/logo-burger.png";

export default function Burger() {
  const Burger = styled.div`
    background: linear-gradient(0deg, #690297 0%, #bf1399 100%);
    width: 320px;
    height: 640px;
    display: flex;
    flex-flow: column;
    align-items: center;
  `;

  const BurgerHeader = styled.div`
    width: 290px;
    height: 65px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid hsla(0, 0%, 110%, 0.2);
    margin-bottom: 30px;
  `;

  const CloseIcon = styled.div`
    background: url("${imgCloseBurger}");
    width: 20px;
    height: 20px;
    cursor: pointer;
  `;

  const IconWrap = styled.div`
    display: flex;
    flex-flow: row;
  `;

  const StarIcon = styled.div`
    background: url("${imgStars}");
    width: 56px;
    height: 34px;
    margin-right: 6px;
    cursor: pointer;
`;

  const Frame = styled.div`
    background: url("${imgFrame}");
    width: 36px;
    height: 36px;
    cursor: pointer;
`;

  const MenuItem = styled.p`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #fff;
    margin: 0 0 20px 0;
    cursor: pointer;
  `;

  const Menu = styled.div`
    width: 222px;
    height: 382px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  `;

  const Logo = styled.div`
    background: url("${imgLogo}");
    width: 68px;
    height: 102px;
    margin-top: 30px;
  `;

  return (
    <Burger>
      <BurgerHeader>
        <CloseIcon />
        <IconWrap>
          <StarIcon />
          <Frame />
        </IconWrap>
      </BurgerHeader>
      <Menu>
        <MenuItem>Расписание занятий</MenuItem>
        <MenuItem>Ментальная арифметика</MenuItem>
        <MenuItem>Тетрадь</MenuItem>
        <MenuItem>Баланс и оплата</MenuItem>
        <MenuItem>Настройки</MenuItem>
        <MenuItem>Связаться с менеджером</MenuItem>
        <MenuItem>Проверить камеру и звук</MenuItem>
        <MenuItem>Выйти</MenuItem>
      </Menu>
      <Logo />
    </Burger>
  );
}
