import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center text-center space-y-2">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day."}</p>
        <p className="text-sm">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className={`btn btn-primary ${slots.length > 0 ? "bg-gradient-to-r from-primary to-secondary text-white" : "bg-accent"}`}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
