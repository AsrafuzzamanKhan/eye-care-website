import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <div className="heading mb-5 p-4">
                <h3 className="text-center">Our Doctors</h3>
            </div>

            <div className="container">

                <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">

                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }

                </div>
            </div>



        </div>
    );
};

export default Doctors;