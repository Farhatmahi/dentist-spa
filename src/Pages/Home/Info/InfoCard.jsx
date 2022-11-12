import React from "react";

const InfoCard = ({card}) => {
    const {name, description, icon} = card;
  return (
    <div className="card card-side bg-gradient-to-r from-primary to-secondary shadow-md text-white p-6">
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
