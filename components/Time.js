import React from "react";
import styled from "@emotion/styled";
import BtnBoxNext from "../components/BtnBoxNext";

export default function Time() {
  const Container = styled.div`
    width: 290px;
    height: 109px;
    color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 15px;
  `;

  const MagentaContainer = styled(Container)`
    background: linear-gradient(180deg, #b00cc8 0%, #600398 100%);
    box-shadow: 0px 1px 20px rgba(90, 49, 100, 0.226972);
  `;

  const MagentaContainerTime = styled(MagentaContainer)`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    width: 290px;
    height: 79px;
    justify-content: space-around;
  `;

  const Time = styled.p`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    opacity: 0.6;
    margin: 0;
  `;

  const TimeWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-right: 25px;
  `;

  const TitleTime = styled.h1`
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    margin: 10px 0 0 0;
  `;

  const TimeNumber = styled.span`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #fff;
  `;

  return (
    <>
      <MagentaContainerTime>
        <TimeWrap>
          <TitleTime>Следующий урок через:</TitleTime>
          <Time>
            <TimeNumber>04</TimeNumber> ч. <TimeNumber>12</TimeNumber> мин
          </Time>
        </TimeWrap>
        <BtnBoxNext />
      </MagentaContainerTime>
    </>
  );
}
