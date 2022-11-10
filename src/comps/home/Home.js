import "./home.css";
import React, { useEffect } from "react";
import HomeTop from "./homeSections/HomeTop";
import HomeSecond from "./homeSections/HomeSecond";
import HomeThird from "./homeSections/HomeThird";
import HomeServices from "./homeSections/homeServices";
import ChangeTitle from "../titleFunc/titleFun";

export default function Home() {
  ChangeTitle("home");

  return (
    <div>
      <HomeTop></HomeTop>
      <HomeServices></HomeServices>
      <HomeSecond></HomeSecond>
      <HomeThird></HomeThird>
    </div>
  );
}
