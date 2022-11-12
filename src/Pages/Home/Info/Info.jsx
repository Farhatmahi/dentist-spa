import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {

    const cardData = [
        {
            id : 1,
            name : "Opening Hours",
            description : "Open 9 A.M to 5 P.M everyday",
            icon : clock,
        },
        {
            id : 2,
            name : "Our location",
            description : "128/1 Assurance City, Dhaka",
            icon : marker,
        },
        {
            id : 3,
            name : "Contact Us",
            description : "+88 018 6611 3132",
            icon : phone,
        }
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}/>)
            }
        </div>
    );
};

export default Info;