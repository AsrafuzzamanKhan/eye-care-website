import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DetailService = () => {
    const { id } = useParams();

    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    const singleItem = details.filter(detail => detail.id == id);


    return (
        <div className="container">

            <div className="row m-2 g-3 mb-5">
                <div className="col-lg-6 col-sm-12">
                    <img className="img-fluid" src={singleItem[0]?.img} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1>{singleItem[0]?.name}</h1>
                    <p>Details:{singleItem[0]?.description}</p>
                    <p>Overview:{singleItem[0]?.overview}</p>
                    <Link to="/booking"><button className="btn btn-success">Book Appointment</button></Link>

                </div>
            </div>


        </div>
    );
};

export default DetailService;