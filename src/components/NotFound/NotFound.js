import React from 'react';
import img from '../../images/404/error.jpg'

const NotFound = () => {
    return (
        <div>
            <h4 className="text-center pt-5">Sorry! Page not found</h4>
            <img className="w-100" src={img} alt="" />
        </div>
    );
};

export default NotFound;