import "./service-reviews.css";
import React, { useEffect, useState } from "react";

export default function ServiceReviewsList(props) {
  const id = props.props;
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadReviews = () => {
      fetch(`http://localhost:4000/get-reviews/${id}`)
        .then((res) => res.json())
        .then((dataa) => {
          setData(dataa);
          console.log(data);
        });
    };
    loadReviews();
  }, []);
  if (data.length == 0) {
    return (
      <p className="display-6 font-light text-center mb-5 mt-3">
        No Reviews Added Yet to This Service
      </p>
    );
  }
  return (
    <div className="p-5 d-flex flex-row flex-wrap mobile-flex-wrap justify-content-center">
      {data.map((e) => {
        return (
          <div key={e._id} className="review-box p-4 ms-2 me-1 mb-4">
            <div className="d-flex flex-column">
              <div className="d-flex flex-row">
                <img src={e.photo} alt="" className="review-box-img" />
                <div className="ms-3 mt-1">
                  <h6>{e.name}</h6>
                  <h6>{e.email}</h6>
                </div>
              </div>
              <div className="d-flex flex-row mt-3">
                <h5>Rating: {e.rating}</h5>
                <h5 className="ms-4">Date: YetToAdd</h5>
              </div>
              <hr />
              <p>{e.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
