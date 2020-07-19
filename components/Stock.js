import React from "react";
import styled from "@emotion/styled";
import BtnBoxNext from "../components/BtnBoxNext";

export default function Stocks() {
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

  const CyanContainer = styled(Container)`
    background: linear-gradient(187.95deg, #1ac9b7 10.29%, #4da8ee 90.89%);
    box-shadow: 0px 1px 20px rgba(90, 49, 100, 0.226972);
    justify-content: space-around;
  `;

  const DescriptionStock = styled.div`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    max-width: 205px;
  `;

  return (
    <>
      <CyanContainer>
        <DescriptionStock>
          Приведи друга и <br /> получи урок в подарок{" "}
        </DescriptionStock>
        <BtnBoxNext />
      </CyanContainer>
    </>
  );
}
