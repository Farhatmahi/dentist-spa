import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

const AppointmentOption = ({appointmentOption}) => {
    const {name, slots} = appointmentOption;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center text-center space-y-2">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day."}</p>
        <p className="text-sm">{slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE</p>
        <div className="card-actions">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
