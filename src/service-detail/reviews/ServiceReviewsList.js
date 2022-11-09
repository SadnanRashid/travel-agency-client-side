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
        });
    };
    loadReviews();
  }, []);
  return (
    <div>
      <h1>here comes</h1>
    </div>
  );
}
