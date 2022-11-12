import React from "react";

const TestimonialCard = ({ review }) => {
  const { img, location, name, reviewtext } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="mb-4">{reviewtext}</p>
        <div className="flex items-center">
          <figure>
            <img
              src={img}
              className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-2 mr-4"
              alt="Shoes"
            />
          </figure>

          <div className="flex flex-col">
            <h1 className="text-xl">{name}</h1>
            <p className="">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
