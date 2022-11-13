import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  useEffect(() => {
    fetch("availableOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
    return () => {};
  }, []);

  return (
    <section>
      <p className="font-bold text-primary text-center mb-8">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
          />
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointments;
