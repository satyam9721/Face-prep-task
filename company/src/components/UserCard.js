import React from "react";

const MovieCard = ({ myData }) => {
 
  return (
    <div className="card">
      <div className="card-info">
      <h4>Contact Info</h4>
        <img src={myData.picture.large} alt="" />
     
        <p>   <span>FullName:-</span>{myData.name.title}{" "}
          {myData.name.first}
          {myData.name.last}
        </p>
        <p>Contact No.{" "}{myData.cell}</p>
        <p >Email-{" "}{myData.email}</p>
        <p>Country-{" "}{myData.location
.country}</p>
  <p>Age-{myData.registered.age}</p>

      </div>
    </div>
  );
};

export default MovieCard;
