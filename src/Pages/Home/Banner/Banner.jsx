import React from "react";
import chair from '../../../assets/images/chair.png'
import PrimaryButton from "../../../components/PrimaryButton";


const Banner = () => {
  return (
    <div className="hero min-h-screen lg:bg-banner-bg rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 rounded-lg shadow-2xl" alt=''
        />
        <div className="lg:mr-24 text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
