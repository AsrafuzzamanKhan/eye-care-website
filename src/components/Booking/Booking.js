import React from 'react';
import img from '../../images/booked/booked.jpg'
const Booking = () => {
    return (
        <div className="text-center">
            <h3 className="pt-5">Successfully Booked</h3>
            <img className="w-50" src={img} alt="" />
        </div>
    );
};

export default Booking;