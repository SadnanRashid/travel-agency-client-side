import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function HomeServices() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://server-side-tan.vercel.app/services")
        .then((res) => res.json())
        .then((dataa) => {
          // Below algo is to display newly added datas first ;)
          const dataaLength = dataa.length;
          dataa = dataa.slice(dataaLength - 3, dataaLength);
          setData(dataa.reverse());
        });
    };
    fetchData();
  }, []);

  // spinner
  if (data.length === 0) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <p className="display-5 font-light">Our Tour Packages</p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {data.map((e) => {
            return (
              <div className="card col-md-12 card-services m-3" key={e._id}>
                <PhotoProvider>
                  <PhotoView src={e.img}>
                    <img
                      src={e.img}
                      className="card-img-top card-services-img mt-2"
                    />
                  </PhotoView>
                </PhotoProvider>

                <div className="d-flex flex-row justify-content-between">
                  <p className="mb-0">
                    <span>
                      <ImLocation />
                    </span>{" "}
                    {e.location}
                  </p>
                  <p className="text-danger fw-bold mb-0">
                    {e.price < 8001 ? "Trending!" : ""}
                  </p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title fw-bold">{e.name}</h5>
                  <p className="card-text">{e.desc.slice(0, 80)}</p>
                  <p className="text-muted">Price: {e.price}</p>
                  <Link to={`/services/${e._id}`}>
                    <p className="btn btn-primary m-0">Details</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/services" className="d-flex justify-content-center">
        <p className="btn btn-primary w-50">See All Services</p>
      </Link>
    </div>
  );
}
