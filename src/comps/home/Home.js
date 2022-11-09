import "./home.css";
import React from "react";
import HomeTop from "./homeSections/HomeTop";
import HomeSecond from "./homeSections/HomeSecond";
import HomeThird from "./homeSections/HomeThird";
import HomeServices from "./homeSections/homeServices";

export default function Home() {
  return (
    <div>
      <HomeTop></HomeTop>
      <HomeServices></HomeServices>
      <HomeSecond></HomeSecond>
      <HomeThird></HomeThird>
    </div>
  );
}
