import React from "react";
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';



const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

  return (
    <section>
      <div className="hero py-20 lg:bg-banner-bg rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="lg:w-1/2 rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className="lg:w-1/2 flex justify-center">
            <DayPicker className="bg-white rounded-xl p-4 shadow-md"
            mode="single"
            selected={selectedDate}
            onDayClick={setSelectedDate}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
