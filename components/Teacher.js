import React from "react";
import styled from "@emotion/styled";
import imgTeacher from "../public/img/teacher-foto.png";

export default function Teacher() {
  const Teacher = styled.div`
    width: 290px;
    height: 95px;
    border-bottom: 2px solid rgba(42, 42, 59, 0.2);
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 20px;
  `;

  const Title = styled.h2`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 11px;
    line-height: 15px;
    text-transform: uppercase;
    color: #2a2a3b;
    margin-bottom: 20px;
  `;

  const TeacherInfo = styled.div`
    display: flex;
    flex-flow: row nowrap;
  `;

  const Wrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
  `;

  const TeacherFoto = styled.div`
    background: url("${imgTeacher}");
    width: 38px;
    height: 38px;
    margin-right: 15px;
  `;

  const TeacherName = styled.p`
    font-family: Open, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #2a2a3b;
    margin: 0;
  `;

  const Subject = styled.p`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #2a2a3b;
    opacity: 0.75;
    margin: 0;
  `;

  return (
    <Teacher>
      <Title>Преподаватель:</Title>
      <TeacherInfo>
        <TeacherFoto />
        <Wrap>
          <TeacherName>Ольга Титова</TeacherName>
          <Subject>Ментальная арифметика</Subject>
        </Wrap>
      </TeacherInfo>
    </Teacher>
  );
}
