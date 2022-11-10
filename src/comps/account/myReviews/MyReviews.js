import "./myreviews.css";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function MyReviews() {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:4000/get-user-reviews/${userEmail}`)
        .then((res) => res.json())
        .then((dataa) => {
          console.log(dataa);
          setData(dataa);
        })
        .catch((e) => console.log(e));
    };
    fetchData();
    console.log(data);
  }, []);
  //   variable to index table rows
  let reviewIndex = 0;
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
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            reviewIndex = reviewIndex + 1;
            return (
              <tr key={e._id}>
                <th scope="row">{reviewIndex}</th>
                <td>{e.serviceID}</td>
                <td>{e.rating}</td>
                <td>{e.review}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
