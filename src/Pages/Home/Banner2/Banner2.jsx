import React from "react";
import img from '../../../assets/images/treatment.png'
import PrimaryButton from "../../../components/PrimaryButton";

const Banner2 = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:p-20">
        <img
          src={img} className="rounded-lg" alt=""
        />
        </div>
        
        <div className="lg:w-1/2 lg:pr-20 text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton>Get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
