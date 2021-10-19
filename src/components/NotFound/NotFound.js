import React from 'react';
import img from '../../images/error/error.jpg'

const NotFound = () => {
    return (
        <div>
            <h4 className="text-center pt-5">Sorry! Page not found</h4>
            <img className="w-100" src={img} alt="" />
        </div>
    );
};

export default NotFound;