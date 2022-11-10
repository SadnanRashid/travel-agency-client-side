import "./addservice.css";
import React from "react";

export default function AddService() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.serviceName.value;
    const location = form.serviceLocation.value;
    const img = form.serviceImg.value;
    const price = form.servicePrice.value;
    const duration = form.serviceDuration.value;
    const desc = form.serviceDesc.value;
    console.log(name, location, desc, price, duration, img);
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
                      Review Confermation
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">MODALBODY</div>
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
