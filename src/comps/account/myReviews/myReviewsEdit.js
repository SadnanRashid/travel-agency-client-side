import React from "react";
import { useParams } from "react-router-dom";

export default function MyReviewsEdit() {
  let { id } = useParams();
  console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const exp = form.userExp.value;
    //
    fetch(`http://localhost:4000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("jsonToken")}`,
      },
      body: JSON.stringify({ review: review, rating: exp }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          window.alert("Eddited successfully");
          //   maybe bavigate to my-reviews?
        }
      });
  };
  return (
    <div className="mt-5">
      <div className="font-light ms-5 me-5 p-4 style-add-review">
        <p className="display-6">Edit your review: </p>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row mobile-flex-column">
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
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}
