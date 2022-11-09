import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";

export default function HomeServices() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:4000/services")
        .then((res) => res.json())
        .then((dataa) => {
          console.log(dataa);
          setData(dataa);
        });
    };
    fetchData();
  }, []);

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
                <img
                  src={e.img}
                  className="card-img-top card-services-img mt-2"
                  alt="..."
                />
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
                  <a className="btn btn-primary">Details</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
