import "./servicedetail.css";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { ImLocation, ImClock2, ImUsers } from "react-icons/im";
import ServiceDetailSide from "./ServiceDetailsSide";
import ServiceReviews from "./reviews/ServiceReviews";

export default function ServiceDetail() {
  const data = useLoaderData();
  return (
    <div>
      <div className="d-flex flex-row ms-3 me-3 justify-content-between service-detail-responsive">
        <div className="service-detail-main mt-5">
          <div>
            <p className="display-5">{data.name}</p>
            <h5 className="font-light fw-bold">
              {" "}
              <ImLocation /> {data.location}
            </h5>
            <hr />
            {/* small details */}
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row">
                <h1 className="me-3">
                  <ImClock2 />
                </h1>
                <div>
                  <h5>Duration</h5>
                  <p>{data.duration}</p>
                </div>
              </div>
              {/* <div className="d-flex flex-row d-none">
            <h1 className="me-3">
              <ImUsers />
            </h1>
            <div>
              <h5>Tour Type</h5>
              <p>Group</p>
            </div>
          </div> */}
              <div className="d-flex flex-row">
                <h1 className="me-3">
                  <ImLocation />
                </h1>
                <div>
                  <h5>Location</h5>
                  <p>{data.location}</p>
                </div>
              </div>
            </div>
            {/* end of small details */}
          </div>
          {/* service details and image */}
          <div className="mt-5 mb-5">
            <img src={data.img} alt="" className="services-details-img" />
            <div className="mt-4">
              <p className="display-6 overview-text mb-3">Overview</p>
              <p className="mt-3">{data.desc}</p>
              <br />
              <p> {data.desc_1}</p>
              <br />
              <p>{data.desc_2}</p>
              <br />
              <p>{data.desc_3}</p>
              <br />
            </div>
          </div>
        </div>
        {/* side bar */}
        <div>
          <ServiceDetailSide price={data.price} />
        </div>
      </div>
      <hr />
      <ServiceReviews props={data} />
    </div>
  );
}
