import React from "react";
import PrimaryButton from "../../../components/PrimaryButton";

const Contact = () => {
  return (
    <div className="hero bg-contact rounded-xl py-10">
      <div className="hero-content flex-col">
        <div className="flex flex-col items-center">
        <p className="text-primary font-bold">Contact us</p>
        <h1 className="text-4xl text-white text-center">Stay Connected with us</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Send Message</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
