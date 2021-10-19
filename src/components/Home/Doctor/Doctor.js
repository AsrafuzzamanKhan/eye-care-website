import React from 'react';

const Doctor = (props) => {
    const { name, specialist, img, visithour } = props.doctor;
    return (
        <div>
            <div className="col">
                <div className="card h-100 text-center">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{specialist}</p>
                        <p className="card-text">{visithour}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Doctor;