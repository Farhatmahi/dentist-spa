import React from "react";

const PrimaryButton = ({children}) => {
  return (
    <button className="btn btn-primary text-white transition-all duration-500 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100">
      {children}
    </button>
  );
};

export default PrimaryButton;
