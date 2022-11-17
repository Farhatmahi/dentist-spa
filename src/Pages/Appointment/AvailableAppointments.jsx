import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import Modal from "./Modal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {data : appointmentOptions = []} = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5001/appointmentOptions?date=${date}`);
      return await res.json();
    },
  });

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
            setTreatment={setTreatment}
          />
        ))}
        {treatment && (
          <Modal
            treatment={treatment}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
          />
        )}
      </div>
    </section>
  );
};

export default AvailableAppointments;
