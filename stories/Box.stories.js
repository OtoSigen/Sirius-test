import React from "react";
import MyAwards from "../components/MyAwards";
import Abakus from "../components/Abakus";
import Stocks from "../components/Stock";
import Time from "../components/Time";

export default {
  title: "Box",
  component: MyAwards,
  Abakus,
  Stocks,
  Time,
};

export const Мои_награды = () => <MyAwards />;
export const Абакус = () => <Abakus />;
export const Акция = () => <Stocks />;
export const Время = () => <Time />;
