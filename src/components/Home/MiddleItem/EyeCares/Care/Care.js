import React from 'react';

const Care = (props) => {
    const { name, description, img } = props.care;
    return (
        <div>
            <div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;