import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { name, description, img, id } = props.service;
    return (
        <div>
            <div>
                <div className="col">
                    <div className="card border-0 shadow card-height">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>

                        </div>
                        <div className="card-footer text-center border-0 bg-white">
                            <Link to={`/servicedetails/${id}`}> <small className="text-muted "><button className="btn btn-success w-100">See More</button></small></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;