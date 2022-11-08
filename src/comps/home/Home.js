import "./home.css";
import React from "react";
import HomeTop from "./homeSections/HomeTop";
import HomeSecond from "./homeSections/HomeSecond";

export default function Home() {
  return (
    <div>
      <HomeTop></HomeTop>
      <HomeSecond></HomeSecond>
    </div>
  );
}
