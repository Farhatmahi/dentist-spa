import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import PrimaryButton from '../../../components/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className="hero bg-appointment rounded-xl">
  <div className="hero-content lg:pb-0 flex-col lg:flex-row px-8 py-12">
    <img src={doctor} className="hidden lg:block lg:-mt-40 lg:w-1/2" alt='' />
    <div>
        <h2 className='font-bold text-primary mb-4'>Appointment</h2>
      <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
      <p className="text-sm py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>Appointment</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default MakeAppointment;