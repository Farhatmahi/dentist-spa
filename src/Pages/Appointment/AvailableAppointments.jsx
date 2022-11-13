import React from "react";
import { format } from "date-fns";

const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {
  return (
    <section>
      <p className="font-bold text-primary text-center">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
    </section>
  );
};

export default AvailableAppointments;
