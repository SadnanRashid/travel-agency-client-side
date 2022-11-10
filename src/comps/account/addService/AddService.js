import "./addservice.css";
import React, { useState } from "react";

export default function AddService() {
  const [isAdded, setIsAdded] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.serviceName.value;
    const location = form.serviceLocation.value;
    const img = form.serviceImg.value;
    const price = form.servicePrice.value;
    const duration = form.serviceDuration.value;
    const desc = form.serviceDesc.value;
    const doc = {
      name: name,
      location: location,
      img: img,
      price: price,
      duration: duration,
      desc: desc,
    };
    // try post api
    fetch("http://localhost:4000/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsAdded(
            `The review has been added successfully. Id of database: ${data.insertedId}`
          );
        } else {
          setIsAdded(`The review could not be added. Please try again!`);
        }
      });
    //
  };
  return (
    <div>
      <div className="mb-5 mt-5">
        <div className="font-light ms-5 me-5 p-4 style-add-review">
          <p className="display-6">Add a Service: </p>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row mobile-flex-column">
              <input
                type="text"
                name="serviceName"
                className="review-inputbox me-3"
                placeholder="Enter Service Title"
              />
              <input
                type="text"
                className="review-inputbox"
                name="serviceLocation"
                placeholder="Enter the location of service"
              />
            </div>
            <div className="d-flex flex-row mobile-flex-column">
              <input
                type="text"
                name="serviceImg"
                className="review-inputbox me-3"
                placeholder="Image link"
              />
              <input
                type="number"
                className="review-inputbox"
                name="servicePrice"
                placeholder="Price the service"
              />
            </div>
            <div className="d-flex flex-row mobile-flex-column">
              <input
                type="text"
                name="serviceDuration"
                className="review-inputbox me-0"
                placeholder="Service duration?"
              />
            </div>
            <h5 className="mt-4 fw-bold">Write Your Service Description: </h5>
            <textarea
              name="serviceDesc"
              cols="20"
              rows="7"
              className="review-inputbox review-inputbox-big"
            ></textarea>
            <button
              type="submit"
              className="btn btn-dark w-100 font-weight-bold mt-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Submit
            </button>
          </form>
        </div>
        {/* modal popup: */}
        <div>
          <>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Service Confermation
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">{isAdded}</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
