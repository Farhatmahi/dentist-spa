import React from 'react';
import ServiceCard from './ServiceCard';
import flouride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"


const Services = () => {
    const serviceData = [
        {
            id : 1, 
            name : "Fluoride Treatment",
            description : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon : flouride
        },
        {
            id : 2, 
            name : "Cavity Filling",
            description : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon : cavity
        },
        {
            id : 3, 
            name : "Teeth Whitening",
            description : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon : whitening
        }
    ]
    return (
        <div>
            <h1 className='uppercase text-center text-primary font-bold'>Our Services</h1>
            <h2 className='text-center text-4xl'>Services we provide</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {
                serviceData.map(service => <ServiceCard key={service.id} service={service}/>)
            }
            </div>
        </div>
    );
};

export default Services;