import "./home-section.css";
import React from "react";
import { BsEnvelope } from "react-icons/bs";

export default function HomeThird() {
  return (
    <div className="mb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-sm-12 col-xs-12">
            <div className="card p-3 p-md-4 text-white">
              <span className="display-2">
                <BsEnvelope />
              </span>
              <h6 className="my-3"> Subscribe to our newsletter </h6>
              <div className="row d-flex my-2 pr-2 pr-md-5 div1">
                <div className="col-9">
                  <input
                    type="email"
                    className="form-control py-3"
                    id="subInputEmail"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="col-3 px-0">
                  <button className="btn text-white px-4 py-2 mt-2">
                    {" "}
                    OK{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
