import "./home-section.css";

import React from "react";

export default function HomeSecond() {
  return (
    <div className="d-flex flex-col-custom mb-5 mt-5">
      <div className="home-second-box d-flex flex-column justify-content-center">
        <p className="display-6">Go Beyond Your Dreams</p>
        <hr />
        <h5 className="fw-normal">Discover your ideal experience with us</h5>
      </div>
      {/*  */}
      <div className="home-second-box home-second-box-2 d-flex flex-column justify-content-end ms-3-c">
        <h3 className="fw-normal text-center mb-4">Discount on Airlines</h3>
      </div>
      {/*  */}
      <div className="home-second-box home-second-box-3 d-flex flex-column justify-content-end ms-3-c">
        <h3 className="fw-normal text-center mb-4">Discover The World</h3>
      </div>
      {/*  */}
      <div className="home-second-box home-second-box-4 d-flex flex-column justify-content-end ms-3-c">
        <h3 className="fw-normal text-center mb-4">Luxerious Hotels</h3>
      </div>
    </div>
  );
}
