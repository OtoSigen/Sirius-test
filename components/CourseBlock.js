import React from "react";
import styled from "@emotion/styled";
import CourseBadge from "./CourseBadge";
import HomeWork from "./HomeWork";
import Teacher from "./Teacher";

export default function CourseBlock() {
  const CourseWrap = styled.div`
    box-shadow: 0px 1px 4px rgba(90, 49, 100, 0.226972);
    width: 320px;
    height: 456px;
  `;

  const Wrap = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
  `;
  return (
    <CourseWrap>
      <CourseBadge />
      <Wrap>
        <Teacher />
        <HomeWork />
      </Wrap>
    </CourseWrap>
  );
}
