import "./service-reviews.css";
import React, { useContext, useState } from "react";
import ServiceReviewsList from "./ServiceReviewsList";
import { AuthContext } from "../../context/AuthContext";

export default function ServiceReviews(props) {
  const { _id, name } = props.props;
  const id = _id;
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const photoURL = user?.photoURL;
  const userName = user?.displayName;
  // For rerendering ui once review has been added
  const [isAdded, setIsAdded] = useState(0);
  //   function to push data to database
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const exp = form.userExp.value;
    console.log(name, review, exp);
    //
    const reviewData = {
      email: userEmail,
      photo: photoURL,
      serviceID: _id,
      name: userName,
      rating: exp,
      review: review,
      serviceName: name,
    };
    //
    fetch("http://localhost:4000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setIsAdded(isAdded + 1);
          // this state will update and re-render the child comp. sent as props
        }
      });
  };
  //
  if (!user?.email) {
    return (
      <div>
        <p className="display-4 mt-5 mb-5 text-center">
          Please Login To Post Review
        </p>
        <hr />
        <p className="display-4 mt-5 text-center"> Reviews: </p>
        <ServiceReviewsList props={id} stat={isAdded} />
      </div>
    );
  }
  //
  return (
    <div className="mb-5">
      <div className="font-light ms-5 me-5 p-4 style-add-review">
        <p className="display-6">Write your review: </p>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row mobile-flex-column">
            <input
              type="text"
              name="username"
              className="review-inputbox me-5"
              placeholder="Enter Your Name"
            />
            <input
              type="text"
              className="review-inputbox"
              name="userExp"
              placeholder="How was your exeprience? Good/Bad/Awesome!"
            />
          </div>
          <h5 className="mt-4 fw-bold">Write Your Review: </h5>
          <textarea
            name="review"
            cols="20"
            rows="7"
            className="review-inputbox review-inputbox-big"
          ></textarea>
          <button
            type="submit"
            className="btn btn-dark w-100 font-weight-bold mt-2"
          >
            Submit
          </button>
        </form>
      </div>
      <p className="display-4 mt-5 text-center"> Reviews: </p>
      <ServiceReviewsList props={id} stat={isAdded} />
    </div>
  );
}

{
  /* <p className="display-4 mt-5 mb-5 text-center">
Please Login To Post Review
</p> */
}
