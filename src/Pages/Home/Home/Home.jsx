import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='lg:space-y-36 space-y-16 w-[90%] mx-auto'>
            <Banner />
            <Info />
            <Services/>
            <Banner2 />
            <MakeAppointment/>
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;