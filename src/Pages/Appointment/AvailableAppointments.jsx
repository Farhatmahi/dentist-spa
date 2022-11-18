import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import Modal from "./Modal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {data : appointmentOptions = [], refetch, isLoading} = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5002/appointmentOptions?date=${date}`);
      return await res.json();
    },
  });

  if(isLoading){
    return <Loading />
  }

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
            refetch = {refetch}
          />
        )}
      </div>
    </section>
  );
};

export default AvailableAppointments;
