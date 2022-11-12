import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

    const reviews = [
        {
            id : 1, 
            name : 'Farhat Omar Mahi',
            location : "Dhaka, Bangladesh",
            img : people1,
            reviewtext : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id : 2, 
            name : 'Branden Pratt',
            location : "Miami, US",
            img : people2,
            reviewtext : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id : 1, 
            name : 'Bennie Smith',
            location : "Memphis, USA",
            img : people3,
            reviewtext : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        
    ]

    return (
        <section>
            <div className="flex justify-between items-center mb-8">
                <div className="">
                <p className='text-primary font-bold mb-4'>Testimonials</p>
                <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </figure>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    reviews.map(review => <TestimonialCard key={review} review={review} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;