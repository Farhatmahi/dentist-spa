import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (

        <div className='lg:space-y-36 space-y-16 w-[90%] mx-auto'>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <AvailableAppointments selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
    );
};

export default Appointment;