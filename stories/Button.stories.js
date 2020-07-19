import React from "react";
import BtnBoxNext from "../components/BtnBoxNext";
import BtnAddLesson from "../components/BtnAddLesson";
import BtnClose from "../components/BtnClose";
import BtnArrow from "../components/BtnArrow";
import BtnCancelLesson from "../components/BtnCanselLesson";

export default {
  title: "Buttons",
  component: BtnBoxNext,
  BtnAddLesson,
};

export const Кнопка_1 = () => (
  <div
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "rgba(51, 0, 153, 0.6)",
    }}
  >
    <BtnBoxNext />
  </div>
);

export const Кнопка_2 = () => <BtnAddLesson />;

export const Кнопка_3 = () => (
  <div
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "rgba(51, 0, 153, 0.6)",
    }}
  >
    <BtnClose />
  </div>
);

export const Кнопка_4 = () => (
  <div
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "rgba(51, 0, 153, 0.6)",
    }}
  >
    <BtnArrow />
  </div>
);

export const Кнопка_5 = () => <BtnCancelLesson />;
