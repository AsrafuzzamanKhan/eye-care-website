import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="">
            <div className="heading mb-5 p-4">
                <h3 className="text-center">Our Services</h3>
            </div>
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 ">

                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;