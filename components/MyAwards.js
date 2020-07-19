import React from "react";
import styled from "@emotion/styled";
import BtnBoxNext from "../components/BtnBoxNext";

export default function MyAwards() {
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

  const BlueContainer = styled(Container)`
    background: linear-gradient(199.15deg, #334ffe 7.38%, #6c2feb 95.63%);
    box-shadow: 0px 1px 20px rgba(90, 49, 100, 0.226972);
  `;

  const Title = styled.h1`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;
    margin: 20px 0 10px 0;
  `;

  const Description = styled.p`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    margin: 0 0 25px 0;
  `;

  const InfoWrap = styled.div`
    display: flex;
    flex-flow: column;
    max-width: 205px;
  `;

  return (
    <>
      <BlueContainer>
        <InfoWrap>
          <Title>Мои награды</Title>
          <Description>
            Краткое описание раздела с наградами учеников
          </Description>
        </InfoWrap>
        <BtnBoxNext />
      </BlueContainer>
    </>
  );
}
