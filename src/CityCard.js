import React from "react";

const TuristInfoCard = props => {
  return (
    <div className="card m-3">
      <img alt="logo" src={props.image} className="card-img-top" />
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          Go to {props.cityName}
        </a>
      </div>
    </div>
  );
};

export default TuristInfoCard;
