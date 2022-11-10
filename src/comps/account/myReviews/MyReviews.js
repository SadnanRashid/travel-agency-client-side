import "./myreviews.css";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { AiFillDelete, AiFillFolderAdd } from "react-icons/ai";

export default function MyReviews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:4000/get-user-reviews/${userEmail}`)
        .then((res) => res.json())
        .then((dataa) => {
          console.log(dataa);
          setData(dataa);
          setLoading(true);
        })
        .catch((e) => console.log(e));
    };
    fetchData();
  }, [user?.email]);
  //   variable to index table rows
  let reviewIndex = 0;
  //Handledelete function
  const handleDelete = (id) => {
    //
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(`http://localhost:4000/delete-reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((dataa) => {
          if (dataa.deletedCount > 0) {
            alert("Review deleted successfully");
            const remainingData = data.filter((rev) => rev._id !== id);
            setData(remainingData);
          }
        });
    }
  };
  // return no reviews found if user has not added any reviews
  if (loading === true && data.length === 0) {
    return (
      <p className="mt-5 mb-5 display-6 text-center">No reviews were added</p>
    );
  }
  //
  return (
    <div className="mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Service</th>
            <th scope="col">Rating</th>
            <th scope="col">Review</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            reviewIndex = reviewIndex + 1;
            return (
              <tr key={e._id}>
                <th scope="row">{reviewIndex}</th>
                <td>{e.serviceName}</td>
                <td>{e.rating}</td>
                <td>{e.review}</td>
                <td>
                  <div className="d-flex flex-row">
                    <button
                      className="btn me-2"
                      onClick={() => {
                        handleDelete(e._id);
                      }}
                    >
                      <p className="h5">
                        <AiFillDelete />
                      </p>
                    </button>
                    <button className="btn">
                      <p className="h5">
                        <AiFillFolderAdd />
                      </p>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
