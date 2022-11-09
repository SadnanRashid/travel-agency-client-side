import "./servicedetail.css";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { ImLocation, ImClock2, ImUsers } from "react-icons/im";

export default function ServiceDetailSide({ price }) {
  return (
    <div className="d-flex flex-column service-detail-sidebar text-center">
      <p className="display-6 p-3">
        <u>Our Package: </u>
      </p>
      <div className=" p-3">
        <p className="h4 p-3">Package Details: </p>
        <p>• Buffet breakfast as per the Itinerary</p>
        <p>• Visit eight villages showcasing Polynesian culture</p>
        <p>• Complimentary Camel safari, Bonfire</p>
        <p>• All toll tax, parking, fuel, and driver allowances</p>
        <p>• Sight seeing on clients request</p>
      </div>

      <p className="h4 p-3 pb-0">
        <u>Price: </u>
      </p>
      <p className="h6">
        <span className="h5 text-success fw-bold">{price}/=</span> per person
      </p>
      <div></div>
    </div>
  );
}
