import React from "react";
import styled from "@emotion/styled";

export default function LessonsLeft({ children }) {
  const LessonsLeft = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 42px;
  `;

  const LessonsLeftTitle = styled.p`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #2a2a3b;
    max-width: 73px;
  `;

  const LessonsLeftBtn = styled.button`
    background: linear-gradient(99.33deg, #f64867 7.06%, #ba2d86 95.26%);
    border-radius: 32px;
    width: 42px;
    height: 42px;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    color: #fff;
  `;

  let numberOfLessons = 3;

  return (
    <LessonsLeft>
      <LessonsLeftTitle>Осталось уроков:</LessonsLeftTitle>
      <LessonsLeftBtn>{numberOfLessons}</LessonsLeftBtn>
    </LessonsLeft>
  );
}
