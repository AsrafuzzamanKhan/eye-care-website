import React, { useEffect, useState } from 'react';
import Care from '../Care/Care';
import './EyeCare.css'


const EyeCare = () => {
    const [cares, setCares] = useState([]);
    useEffect(() => {
        fetch('/care.json')
            .then(res => res.json())
            .then(data => setCares(data))
    }, [])
    return (
        <div>

            <div>
                <div className='heading-color p-5 mb-5 text-center'>
                    <h1>Help You To See Better</h1>

                    <p>We combine clinical expertise with cutting-edge technology to provide premium care for your eyes.</p>
                </div>
                <div className="container mb-5">

                    <div className="row row-cols-1 row-cols-md-4 g-4">

                        {
                            cares.map(care => <Care
                                key={care.id}
                                care={care}
                            ></Care>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EyeCare;