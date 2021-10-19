import React from 'react';

const Branch = (props) => {
    const { name, location, img, phone } = props.branch;
    return (
        <div>
            <div>
                <div className="row mb-4 border">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start p-2" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">{location}</p>
                            <p className="card-text">{phone}</p>
                            <p className="card-text"><small className="text-muted">For more information call us</small></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Branch;